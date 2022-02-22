/**
 * @name unicoLayout
 * @description object for unico sdk configuration. We can set colors and divs here
 */

export const unicoLayout = {
  silhouette: {
    primaryColor: '#2647D7',
    secondaryColor: '#DE0C4B',
    neutralColor: '#fff',
  },
  buttonCapture: {
    backgroundColor: '#fff',
    iconColor: '#2647D7',
  },
  popupLoadingHtml:
    '<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Carregando sua câmera...</div>',
  popupOrientationHtml:
    '<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Mantenha o celular no modo porta retrato</div>',
    boxMessage: {
    backgroundColor: '#fff',
    fontColor: '#000',
  },
  boxDocument: {
    backgroundColor: '#2980ff',
    fontColor: '#fff',
  },
}

export const unicoConfig = { TYPE: 2 } //that means we are using unico smartcamera
