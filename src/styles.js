
/**
 * Usage:
 * import design, { Colors } from '../styles';
 */

export const Colors = {
  NAVBAR: '#51505E',
  CARROUSEL: '#302E3A',
  EQUIPO: '#8CA350',
  EQUIPO2: 'rgba(211,209,215,0.5)',
  DISPOSITIVO: '#4a4856',
  APP: '#bfbdc2',
  CONTACTOS: 'rgb(101,100,115)',
  FOOTER: '#302e3a',
  WHITE: 'white',
  FORMULARIO: '#4a4856',
  BOTTONACEPTAR: '#8ba24d',
  PLAGAS: '#676779',

  /**
   * Get one of this colors with an alpha value
   * @param  {[string]} color
   * @param  {[number]} alpha [(0.0 - 1.0)]
   */
  withAlpha(color, alpha) {
    const hex = this[color];
    if (!hex) {
      throw new Error(`Color ${color} does not exist`);
    }

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },
};

const design = ({

});

export default design;
