import { useEffect, useState } from "react"

const useCarmodel = () => {
    const [maincars,setMaincars] = useState([])
    const [cars, setCars] = useState([]);
    const [totalpage,setTotalpage] = useState(0);
    const [pageno, setPageno] = useState(0)
    const size = 4;
    const [democar, setDemocar] = useState([])

    useEffect(() => {
        fetch(`https://evening-caverns-02179.herokuapp.com/carmodels?page=${pageno}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            if(data)
            {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setTotalpage(pages)
                setCars(data.result)
            }
        })
    },[pageno,democar])

    useEffect(() => {
        fetch('https://evening-caverns-02179.herokuapp.com/maincar')
        .then(res => res.json())
        .then(data => setMaincars(data))
    },[])

    return {
        pageno,
        setPageno,
        totalpage,
        setTotalpage,
        cars, setCars,
        maincars,democar, setDemocar
    }
}

export default useCarmodel;