export interface StudentGetallResponse{
  id: number
  ime: string
  prezime: string
  broj_indeksa: string
  opstina_rodjenja_id: number
  opstina_rodjenja: StudentGetAllOpstinaRodjenja
  datum_rodjenja: string
  created_time: string
  slika_studenta: string
}
export interface StudentGetAllOpstinaRodjenja {
  id: number
  description: string
  drzava_id: number
  drzava: StudentGetAllDrzava
}
export interface StudentGetAllDrzava {
  id: number
  naziv: string
}
