export const sortBy = (l: any[], key: string) => {
  
  return l.sort((a, b) => a[key] - b[key])
}