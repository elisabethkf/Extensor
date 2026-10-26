import {useCallback, useEffect, useState} from 'react'
import {Button, Flex, Select, Stack, TextInput} from '@sanity/ui'
import {set, useClient} from 'sanity'

const NY = '__ny__'

// Nedtrekk med kategoriene som allerede er i bruk på samme dokumenttype, pluss «＋ Ny kategori».
// `visningsnavn` oversetter eldre lagrede verdier (f.eks. «besok») til lesbare navn.
export function lagKategoriInput({dokumentType, felt, visningsnavn = {}}) {
  return function KategoriInput(props) {
    const {value, onChange, readOnly} = props
    const klient = useClient({apiVersion: '2024-01-01'})
    const [eksisterende, setEksisterende] = useState([])
    const [lagerNy, setLagerNy] = useState(false)
    const [tekst, setTekst] = useState('')

    const hent = useCallback(
      () =>
        klient
          .fetch(`array::unique(*[_type == $type && defined(${felt})].${felt})`, {type: dokumentType})
          .then((v) => setEksisterende(v || [])),
      [klient]
    )
    useEffect(() => {
      hent()
    }, [hent])

    const navn = (v) => visningsnavn[v] || v
    const valg = [...new Set([...eksisterende, ...(value ? [value] : [])])].sort((a, b) =>
      navn(a).localeCompare(navn(b), 'nb')
    )

    const leggTil = () => {
      const ny = tekst.trim()
      if (!ny) return
      // Gjenbruk eksisterende kategori hvis den bare skrives med annen store/små bokstav
      const treff = valg.find((v) => navn(v).toLowerCase() === ny.toLowerCase())
      onChange(set(treff || ny))
      setLagerNy(false)
      setTekst('')
    }

    if (lagerNy) {
      return (
        <Flex gap={2}>
          <div style={{flex: 1}}>
            <TextInput
              autoFocus
              placeholder="Navn på ny kategori"
              value={tekst}
              onChange={(e) => setTekst(e.currentTarget.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  leggTil()
                }
              }}
            />
          </div>
          <Button text="Legg til" tone="positive" onClick={leggTil} disabled={!tekst.trim()} />
          <Button text="Avbryt" mode="bleed" onClick={() => setLagerNy(false)} />
        </Flex>
      )
    }

    return (
      <Stack>
        <Select
          readOnly={readOnly}
          value={value || ''}
          onChange={(e) => {
            const v = e.currentTarget.value
            if (v === NY) setLagerNy(true)
            else if (v) onChange(set(v))
          }}
        >
          <option value="" disabled>
            Velg …
          </option>
          {valg.map((v) => (
            <option key={v} value={v}>
              {navn(v)}
            </option>
          ))}
          <option value={NY}>＋ Ny kategori …</option>
        </Select>
      </Stack>
    )
  }
}
