import React from 'react';
import { Container } from './styles';
import Buttons from '../Buttons';

export function Header(){
  return (
    <Container>
        <svg className="logo" viewBox="0 0 144.42 72.71">
          <ellipse cx="72.21" cy="36.36" rx="71.71" ry="35.86"/>
          <path d="M63.11,51.2q0,1.58-.53,1.58c-.31,0-.42-.14-.32-.41a2.08,2.08,0,0,0,.15-.64q0-1.52-3.16-2.63-5-1.81-13.5-1.81a54.22,54.22,0,0,0-15.73,2Q27.8,50,26.4,50.5a13.93,13.93,0,0,1-3.74.76q-2.16,0-2.16-1.52,0-2.86,5.09-5,5.55-2.22,14.67-2.22,14,0,19.82,3.74Q63.11,48.27,63.11,51.2ZM76.79,15.12q0,5.2-8,9.88a39.77,39.77,0,0,1-7,3.22A50.52,50.52,0,0,1,44.7,31.55a29.93,29.93,0,0,1-4.79-.29q-.35.47-1.34,2t-1.37,2.1q-.38.56-1.17,1.75t-1.26,1.78a37.07,37.07,0,0,1-2.69,3,7.47,7.47,0,0,1-5.44,2,5.56,5.56,0,0,1-1.58-.26q-.88-.26-1-.53c-.1-.18-.13-.28-.09-.32s.13,0,.26.06a2.26,2.26,0,0,0,.88.15,7.88,7.88,0,0,0,1.67-.15A9.51,9.51,0,0,0,31.89,40a92.25,92.25,0,0,0,6.72-8.89q-4.91-1-5.79-3.74c-.08-.27-.06-.42.06-.44s.21.07.29.26q.7,1.05,4.33,1.05,1.34,0,3-.12h.18A77.64,77.64,0,0,1,48,19.3a34.55,34.55,0,0,1,7.75-6.11,26.54,26.54,0,0,1,13-3.68,10.27,10.27,0,0,1,4.79.94Q76.79,12.14,76.79,15.12Zm-4.85.29a4.49,4.49,0,0,0,.64-2.28q0-2.63-6.08-2.63a20,20,0,0,0-4,.76,28.34,28.34,0,0,0-5.82,2.22q-7,3.68-14.5,14.44a75.4,75.4,0,0,0,16.49-4.21Q69.31,19.86,71.94,15.42Z" transform="translate(-2.79 -1.64)"/><path d="M73.7,47.4a15.6,15.6,0,0,1-6.84,2,3.43,3.43,0,0,1-3.33-1.64,3.71,3.71,0,0,1-.47-1.87,10.57,10.57,0,0,1,1.11-4.68,9.72,9.72,0,0,1-1.46,1.23c-.39.35-.58.31-.58-.12q0-.41,1-1.29t3.13-3q2.1-2.07,3.33-3.13a11.59,11.59,0,0,1,7.54-3,6.65,6.65,0,0,1,3,.76,3.88,3.88,0,0,1,2.22,3.86q0,3.39-3.39,7a17.47,17.47,0,0,1-3.74,3q4.79-.76,10.17-5.79a.73.73,0,0,1,.53-.2.24.24,0,0,1,.23.26.68.68,0,0,1-.23.47q-6.43,6.08-12,6.08Zm5.67-6.14a7.31,7.31,0,0,0,1.46-3.77,3.34,3.34,0,0,0-3.1-3,9.47,9.47,0,0,0-6.58,2.81,14,14,0,0,0-4,6,6.64,6.64,0,0,0-.41,2.31,1.77,1.77,0,0,0,.91,1.7,4.12,4.12,0,0,0,2,.5,7.78,7.78,0,0,0,3.22-1.11.88.88,0,0,1-.35-.12,1.05,1.05,0,0,1-.7-.94q0-2,2.28-4.15A5,5,0,0,1,77.44,40Q79.13,40,79.37,41.26Z" transform="translate(-2.79 -1.64)"/><path d="M79.78,64.41a15,15,0,0,1-8.45-2.22A7.13,7.13,0,0,1,68,55.87c0-.16.06-.23.17-.23a.52.52,0,0,1,.53.47,9,9,0,0,0,2.87,5.15,8,8,0,0,0,2.89,1.64,9.7,9.7,0,0,0,3.07.64h1.58q6.49-.35,11.34-6.55a60.22,60.22,0,0,0,4-5.82q1.75-2.89,3.8-6.46a55.73,55.73,0,0,1,3.45-5.44q-1.81,2-4.56,4.68a27.44,27.44,0,0,1-4.74,3.8,7.37,7.37,0,0,1-3.68,1.17,4.31,4.31,0,0,1-2.89-1,3.21,3.21,0,0,1-1.2-2.54q0-4.33,3.86-8.48a16,16,0,0,1,7.25-4.38,11.89,11.89,0,0,1,3.77-.64,6.91,6.91,0,0,1,3.57,1,4.63,4.63,0,0,1,2.19,2.43,3.62,3.62,0,0,1,2,.79q1.11.79,1.11,1.14c0,.23-.16.43-.47.58q-1.87.94-5.91,8.19a61.63,61.63,0,0,1-9.18,12.45,20,20,0,0,1-6.11,4.36A16.51,16.51,0,0,1,79.78,64.41Zm9.06-18.36q0,1.35,1.4,1.34A5,5,0,0,0,93,46.17a41.75,41.75,0,0,0,8.3-7.66q2-2.28,2-3.57a1.28,1.28,0,0,0-.32-.85,1.81,1.81,0,0,0-1.37-.38,8.52,8.52,0,0,0-3.36,1.23,19.74,19.74,0,0,0-4.74,3.71,22.83,22.83,0,0,0-3.54,4.44A6.91,6.91,0,0,0,88.84,46.05Z" transform="translate(-2.79 -1.64)"/><path d="M119.53,47.4a15.6,15.6,0,0,1-6.84,2,3.43,3.43,0,0,1-3.33-1.64,3.71,3.71,0,0,1-.47-1.87A10.57,10.57,0,0,1,110,41.2a9.72,9.72,0,0,1-1.46,1.23c-.39.35-.58.31-.58-.12q0-.41,1-1.29t3.13-3q2.1-2.07,3.33-3.13A11.59,11.59,0,0,1,123,32a6.65,6.65,0,0,1,3,.76,3.88,3.88,0,0,1,2.22,3.86q0,3.39-3.39,7a17.48,17.48,0,0,1-3.74,3q4.79-.76,10.17-5.79a.73.73,0,0,1,.53-.2.24.24,0,0,1,.23.26.68.68,0,0,1-.23.47q-6.43,6.08-12,6.08Zm5.67-6.14a7.31,7.31,0,0,0,1.46-3.77,3.34,3.34,0,0,0-3.1-3A9.47,9.47,0,0,0,117,37.28a14,14,0,0,0-4,6,6.64,6.64,0,0,0-.41,2.31,1.77,1.77,0,0,0,.91,1.7,4.12,4.12,0,0,0,2,.5,7.78,7.78,0,0,0,3.22-1.11.88.88,0,0,1-.35-.12,1.05,1.05,0,0,1-.7-.94q0-2,2.28-4.15A5,5,0,0,1,123.27,40Q125,40,125.2,41.26Z" transform="translate(-2.79 -1.64)"/>
        </svg>

        <Buttons />
    </Container>
  )
}