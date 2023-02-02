import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import TileMap from '../../utils/tilemap'
import ModalDetailBuy from '../../components/ModalDetailBuy'
import near from '../../assets/img/icons/near.svg'
import LoadingModal from '../../components/LoadingModal'
import { getTransactionResult } from '../../assets/js/near/utils'
import checkCircle from '../../assets/img/icons/check_circle.png'
import wrongIcon from '../../assets/img/icons/wrong.png'

export default function CallbackNuruk() {
  const { posX, posY } = useParams()
 

  const [response, setResponse] = useState(null)
  const [showElement, setShowElement] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const getHash = () => {
    const canvas = document.getElementById('modal-buy')
    const ctx = canvas.getContext('2d')
    // const { imgMap } = state
    // setImgMap(imgMap)
    // const tileMap = new TileMap(15, posX, posY, null, imgMap)
    // tileMap.clearCanvas(canvas, ctx)
    // tileMap.draw(canvas, ctx)
    
    const urlParams = new URLSearchParams(window.location.search);
    const txhash = urlParams.get("transactionHashes")

    getTransactionResult(txhash).then((result)=>{
      console.log('result')
      console.log(result)
      if (result != '') {
        if ('metadata' in result){
          setShowElement(true);
        }
      } else {
        setShowElement(false);
      }
      
      setResponse(result)
     
      console.log(txhash)
      setIsLoading(false)
    });
   
  }

  useEffect(() => {
    setIsLoading(true)
    getHash()
  }, [])

  return (
    <div className="container py-5">
      { isLoading && <LoadingModal open={isLoading} /> }
      { !isLoading && showElement && 
        <div className="row">
        <div className="col-12 col-md-6 px-5 mb-5">
          <h1 className="text-primary">
            {response.metadata.title}
          </h1>
          
          <div className="text-center">
            <img src={checkCircle} alt="" />
          </div>
          
          <div className="h3 text-center my-4">¡TRANSACCIÓN EXISTOSA! {response.token_id} </div>

          <p className="text-grey"> {response.metadata.description} </p>
          <div className="col-12 text-center">
            <button
              type="button"
              className="rounded btn btn-lg px-5 btn-primary _btn"
            >
              Ok
            </button>
          </div>
        </div>
        <div className='col-12 col-md-6 px-5 mb-5'>
          <img src={response.metadata.media} />
          </div>
      </div>
      }
      { !isLoading && !showElement && 
         <div className="row">
         <div className="col-12 col-md-12 px-5 mb-5">
         <h1 className="text-primary">
           ¡TRANSACCIÓN FALLIDA!
         </h1>
           <div className="text-center">
               <img src={wrongIcon} alt="" style={{width: '100px'}}/>
           </div>
           <div className="text-center my-4">
             {response}
           </div>
           <div className="text-center mt-5">
             <button
               type="button"
               className="rounded btn btn-xl px-5 btn-red _btn"
             >
               Volver
             </button>
           </div>
         </div>
         <div className="col col-md-6 text-center">
           <canvas
             id="modal-buy"
             type="module"
             className="img__modal__big"
           ></canvas>
         </div>
       </div>
       }

    </div>
      
  )
}
