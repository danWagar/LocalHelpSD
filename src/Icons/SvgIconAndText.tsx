import React from 'react';

interface iIcon {
  currentLocation: boolean;
  icon: string;
}

const SvgIconAndText: React.FC<iIcon> = props => {
  const currentFillColor = '#64656A';
  const fillColor = '#3c3e4b';
  const complimentColor = '#b4c540';

  const getIcon = () => {
    switch (props.icon) {
      case 'home':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="79" height="67" viewBox="0 0 79 67">
              <g transform="translate(-602 -30)">
                <path
                  style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                  d="M0,0H61V45.7H36.871V29.456H23.865V45.7H0Z"
                  transform="translate(611 51.301)"
                />
                <path
                  style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                  d="M38.461.631a2,2,0,0,1,2.077,0L72.9,20.291A2,2,0,0,1,71.857,24H7.143A2,2,0,0,1,6.1,20.291Z"
                  transform="translate(602 30)"
                />
              </g>
            </svg>
            <span style={{ color: props.currentLocation ? currentFillColor : fillColor }}>Home</span>
          </>
        );
      case 'community':
        return (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="86.201"
              height="63.736"
              viewBox="0 0 86.201 63.736"
            >
              <g transform="translate(-791.146 -34)">
                <g transform="translate(4.181 10)">
                  <path
                    style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                    d="M10,0H21.819a10,10,0,0,1,10,10V42a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
                    transform="translate(814 45.736)"
                  />
                  <path
                    style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                    d="M8.344,0c4.625-.017,8.275,3.638,8.275,9.641s-3.686,12.1-8.275,12.1S.128,15.643.128,9.641,3.719.017,8.344,0Z"
                    transform="translate(821.152 24)"
                  />
                </g>
                <g transform="translate(-22.854 16)">
                  <path
                    style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                    d="M10,0h5.2a10,10,0,0,1,10,10V36a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
                    transform="translate(814 41.862)"
                  />
                  <path
                    style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                    d="M5.836,0c3.213-.014,5.748,2.99,5.748,7.923s-2.56,9.94-5.748,9.94S.128,12.855.128,7.923,2.623.014,5.836,0Z"
                    transform="translate(820.57 24)"
                  />
                </g>
                <g transform="translate(38.146 16)">
                  <path
                    style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                    d="M10,0h5.2a10,10,0,0,1,10,10V36a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
                    transform="translate(814 41.862)"
                  />
                  <path
                    style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                    d="M5.836,0c3.213-.014,5.748,2.99,5.748,7.923s-2.56,9.94-5.748,9.94S.128,12.855.128,7.923,2.623.014,5.836,0Z"
                    transform="translate(820.57 24)"
                  />
                </g>
              </g>
            </svg>
            <span style={{ color: props.currentLocation ? currentFillColor : fillColor }}>Community</span>
          </>
        );
      case 'messaging':
        return (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="81.019"
              height="64.053"
              viewBox="0 0 81.019 64.053"
            >
              <g transform="translate(-1165.284 -34)">
                <path
                  style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                  d="M10.8,0H70.216c5.966,0,10.8,5.373,10.8,12l-.03,52.053L71.288,56H10.8C4.836,56,0,50.627,0,44V12C0,5.373,4.836,0,10.8,0Z"
                  transform="translate(1165.284 34)"
                />
                <rect
                  style={{ fill: complimentColor }}
                  width="60"
                  height="7"
                  rx="3"
                  transform="translate(1176 47)"
                />
                <rect
                  style={{ fill: complimentColor }}
                  width="60"
                  height="4"
                  rx="2"
                  transform="translate(1176 74)"
                />
                <rect
                  style={{ fill: complimentColor }}
                  width="60"
                  height="4"
                  rx="2"
                  transform="translate(1176 62)"
                />
              </g>
            </svg>
            <span style={{ color: props.currentLocation ? currentFillColor : fillColor }}>Messaging</span>
          </>
        );
      case 'profile': {
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64.862" viewBox="0 0 64 64.862">
              <g transform="translate(-1404 -34)">
                <g transform="translate(378)">
                  <circle
                    style={{ fill: props.currentLocation ? currentFillColor : fillColor }}
                    cx="32"
                    cy="32"
                    r="32"
                    transform="translate(1026 34)"
                  />
                </g>
                <path
                  style={{ fill: complimentColor }}
                  d="M10,0h7.2a10,10,0,0,1,10,10V32a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V10A10,10,0,0,1,10,0Z"
                  transform="translate(1422.146 66.862)"
                />
                <path
                  style={{ fill: complimentColor }}
                  d="M7.084,0C11-.015,14.09,3.229,14.09,8.556S10.969,19.291,7.084,19.291.128,13.883.128,8.556,3.168.015,7.084,0Z"
                  transform="translate(1428.436 47.571)"
                />
              </g>
            </svg>
            <span style={{ color: props.currentLocation ? currentFillColor : fillColor }}>Profile</span>
          </>
        );
      }
    }
  };
  return <>{getIcon()}</>;
};

export default SvgIconAndText;
