export const JSON2Formdata = (o: any) => {
  const fd = new FormData();

  for(let k in o) fd.append(k, o[k])

  return fd;
}