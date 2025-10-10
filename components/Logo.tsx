import React from 'react';

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  inverted?: boolean;
  noText?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  inverted = false,
  noText = false,
  className = '',
  ...restProps
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="60 160 455 360"
      className={`logo ${className}`}
      {...restProps}
    >
      {/* Background rectangle */}
      

      {/* Nested SVG with polygons */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="qqqq_1"
        x="242.9012840412179"
        y="176.27342608443917"
        viewBox="2158.699951171875 883.0999755859375 682.60009765625 1233.7999267578125"
        xmlSpace="preserve"
        height="161.22448523174322"
        width="89.1975143016935"
        preserveAspectRatio="xMinYMin"
        
      >
        <polygon
          points="2193.7,1347.9 2193.7,1877 2158.7,1842.1 2158.7,1382.9"
          fill={inverted ? '#fff' : '#000'}
        />
        <polygon
          points="2342.5,1123.5 2342.5,1976.9 2307.5,1941.9 2307.5,1158.5"
          fill={inverted ? '#fff' : '#000'}
        />
        <polygon
          points="2675,1549.9 2675,1842.1 2640,1877 2640,1573.9 2465,1506.4 2465,918.1 2500,883.1 2500,1482.4"
          fill={inverted ? '#fff' : '#000'}
        />
        <polygon
          points="2675,1260.1 2675,1412.7 2640,1412.7 2640,1225"
          fill={inverted ? '#fff' : '#000'}
        />
        <polygon
          points="2500,1616.6 2500,2116.9 2465,2081.9 2465,1651.7"
          fill={inverted ? '#fff' : '#000'}
        />
        <polygon
          points="2841.3,1382.9 2841.3,1831.8 2806.3,1866.8 2806.3,1347.9"
          fill={inverted ? '#fff' : '#000'}
        />
      </svg>

      {/* Optional text */}
      {!noText && (
        <>
          {/* HESTIA text */}
          <text 
            x="287" 
            y="405" 
            fill={inverted ? '#fff' : '#000'}
            className="font-bellefair"
            style={{ 
              fontSize: '62px', 
              
              letterSpacing: '8px',
              textAnchor: 'middle'
            }}
          >
            HESTIA
          </text>
          {/* SITE SOLUTIONS text */}
          <text 
            x="287" 
            y="460" 
            fill={inverted ? '#fff' : '#000'}
            className="font-bellefair"
            style={{ 
              fontSize: '50px', 
              fontWeight: '300',
              letterSpacing: '4px',
              textAnchor: 'middle',
              opacity: '0.85'
            }}
          >
            SITE SOLUTIONS
          </text>
        </>
      )}
    </svg>
  );
};

export default Logo;
