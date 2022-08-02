import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    boardColors: {
      red: string;
      blue: string;
      green: string;
      yellow: string;
    },
    pieceColors: {
      red: string;
      blue: string;
      green: string;
      yellow: string;
    }
  }
}
