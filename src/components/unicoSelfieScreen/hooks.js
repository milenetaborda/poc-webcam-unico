import { useEffect, useState } from 'react'
import { useWindowSize } from '../../utils/useWindowSize'
import { unicoConfig, unicoLayout } from './constants.js'

export const useUnicoSelfie = (closeModal) => {
  const [videoConstraints, setVideoContraints] = useState({})
  const [picture, setPicture] = useState('')
  const { width } = useWindowSize()

  useEffect(() => {
    if (width < 700) {
      setVideoContraints({
        width: { min: 100 },
        height: { min: 100 },
        aspectRatio: 0.6666666667
      })

      return
    }

    setVideoContraints({})
  }, [width])

  const initUnico = async () => {
    const acessoWebFrame = await import('./unico.js')

    var callback = {
      on: {
        success: function(obj) {
          setPicture(obj.base64)
          closeModal()
        },
        error: function(err) {
          console.error(err)
        },
        support: function(err) {
          console.log(err)
        }
      }
    }

    acessoWebFrame.webFrameModel
      .loadModelsCameraInteligence(`${window.location.origin}/models`)
      .then(() => {
        acessoWebFrame.initCamera(unicoConfig, callback, unicoLayout)
      })
      .catch(e => {
        console.log('erro')
        console.error(e)
      })
  }

  useEffect(() => {
    typeof window !== undefined && initUnico()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    initUnico,
    videoConstraints,
    picture,
    setPicture,
  }
}
