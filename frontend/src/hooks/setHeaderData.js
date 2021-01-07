import { useState, useEffect } from 'react'

const getData = () => {
  const active       = 'false',
        headerHeight = document.querySelector('.header').offsetHeight

  return {
    active,
    headerHeight,
  }
}

export default function SetHeaderData() {
  const [data, setData] = useState(getData());

  useEffect(() => {
    setData(() => getData())
  }, [])

  return data
}
