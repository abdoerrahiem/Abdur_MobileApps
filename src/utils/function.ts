export const formatRupiah = (number: number) => {
  const reverse = number.toString().split('').reverse().join('')
  let ribuan: any = reverse.match(/\d{1,3}/g)
  ribuan = ribuan.join('.').split('').reverse().join('')

  return ribuan
}
