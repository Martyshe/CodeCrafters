import React, { useEffect, useState } from 'react'
import s from './Categories.module.css'

export default function Categories() {
    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:3333/categories/all') 
          .then(response => response.json()) 
          .then(data => setCategory(data)) 
          .catch(error => console.error('Ошибка:', error));
      }, []);
  return (
    <div className={s.categoriesSection}>
        <div className={s.categoriesSectionHeader}>
        <h2 className={s.h2}>Categories</h2>
        <button id='allCategories'>All categories</button>
        </div>
        
        <div className={s.categoriesCards}>
            
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/d5b8/2858/5c6b7bcbfcc361742162138d4fd97e69?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eoIfuSesegy3OWEV2ZSN9nZLSNwslLYlRqjkrLy47oegL~bTyhpVS7XW6KMwPeMtT8izaukOmYSVLRnKkYSNRhXOetcSIhDIgwtpuKnjXn2aPT1BFNrdgEraeYGrQkvyae0q4fg60-hZJVDPfbdpd6acdwdP~qwzYBCIyXS2FNrn1zbuvsD1tuFfGlq906qjTasF~azN8UHonPzuB8whH~g7LrOzOIS~0Uq6n4POz0CoYGF1sz1t5yKOexeHn9j-ZOzB8fXN752WaNj8o3fCDNFdd5Zg4T4RrC5rJzXdhkLD7nW709-YERAzNumyVK-~MwhCI8j8~USLJyT-AQ1geA__" alt=""></img>
                    <p>Fertilizer</p>
            </div>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/0ea4/85dc/a22d7d1420ade2e799b107a2a03ebe43?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=agjpwSflQjqWNRuC92DXAQLffw1CoWXvGBGOgkpDhwJwK7mvhcZlsntJKPohxP1WRu3L3QGtjFpEx26f1i7zlAdj-GvTOUrJIJbmJ5qP1fsLTj7~DmSobqTNqxMixxfJI27BVRcjn-j-gNyxgVei7vn15FIhhqiDaZQnj-vJ2c-aih4qnRLhHE715-36b~XUZp0SEnOn637wNeXZkjOiWs7Nh1fSYI3xfGkbN~mFKtOBlUIZDTm1I~M6HIZLnNgeZ4Zu4QhcLoRaf9M~GOwx8fJ8yPVGMUqdygYM9YWRCzhOoHyIGpAsbXGrJpr~i4NCye04jlP8es4YHy10gdfo2Q__" alt=""></img>
                    <p>Protective products and septic tanks</p>
            </div>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/bb32/f5b1/da29b98788d0a1e8023245efec5799de?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uDkfAlo~oKBYdlPDw6FJSnLGuyfWPEU0qhM-IkkuDM90RZQ-vCN~tI0IGhlArLzbiqjZD26ehzB~LZWZ9hJ~VjsboItG~WSXAk-NzlJs1lVg5moenZZ0AcBqfbeb5BANEw6sUS7OceEA6gkMEOxWQ3jNnIdwAhQWP~cjpeItEuS--Im-FpKLaxpx96wGHUH08NT-07UflC-LrF1ANf7GWtAaRWMmlJWdwbuL8gd1N-~mZIqNMZW-PjIzJhrp9S6fFuRfUwWWHlNnLnGmTEu5XGT-mKgXN8Vf17B6TPxf3TLIk11MslQLSYiLMPnbO2yLwW~r6u5GL9nHG8RxzWy6TA__" alt=""></img>
                    <p>Planting material	</p>
            </div>
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/fc4a/1839/49a7ce506fe2472d19006cddbfc88b9a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PF5~tTGSfmWd8-xLW2d0QSB1EkVHLAQI8458lZD-9P7C4gru6EiZe62nlgZvjqJDMv5fmWB3oVcHuZ0dI0DDCy6DC~i-RxVW0OlTQ3alEoOcf99LGy-QWDWnPtb33I-hXF70~loOLXVXub2J2NW3EqhbZcWdoRBkPo~taALnPk9B53OoMAevPjtgFrx-~TzsNobFtz-A631eEL61sUUFA0pIvLh4VdJTjd91f9Tj1qZv5z3TzhZXvkMwrAy5Gc8l8GGYWlr7RnCqFUOTFvqN9wtruJtTnBONGK94o~EqDWgRNDwGUVuKc7uDjq~spMt7PYNM6ntDKzUyW6l9yDJwHQ__" alt=""></img>
                    <p>Tools and equipment</p>
            </div>
        </div>
    </div>
  )
}
