import * as React from "react"
import Svg, { SvgProps, Circle } from "react-native-svg"
import { useTheme } from "react-native-paper";
const InitialSVG = ({color}: SvgProps) => {
  const theme = useTheme()
  return (
    <Svg
      
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      viewBox="0 0 342 333"
      fill="none"
    >
      <Circle
        cx={171.47}
        cy={171.47}
        r={160.53}
        fill="none"
        stroke={theme.colors.onSurface}
        strokeDasharray="10 10"
        strokeWidth={2}
        style={{
          fillOpacity: 0,
        }}
      />
      <Circle
        cx={172.091}
        cy={172.091}
        r={95.297}
        fill="none"
        stroke={theme.colors.onSurface}
        strokeDasharray="7 7"
        strokeWidth={2}
        style={{
          fillOpacity: 0,
        }}
      />
      <Circle cx={265.282} cy={301.315} r={6.834} fill={theme.colors.primary} />
      <Circle cx={76.416} cy={40.383} r={6.834} fill={theme.colors.primary}  />
      <Circle cx={99.403} cy={233.597} r={4.97} fill={theme.colors.primary}  />
      <Circle cx={233.597} cy={99.403} r={4.97} fill={theme.colors.primary}  />
      <Circle
        cx={323.06}
        cy={219.929}
        r={17.638}
        fill={color}
        stroke={theme.colors.onSurface}
        strokeWidth={2}
      />
      <Circle
        cx={99.403}
        cy={314.362}
        r={17.638}
        fill={color}
        stroke={theme.colors.onSurface}
        strokeWidth={2}
      />
      <Circle
        cx={18.638}
        cy={121.769}
        r={17.638}
        fill={color}
        stroke={theme.colors.onSurface}
        strokeWidth={2}
      />
      <Circle
        cx={221.172}
        cy={18.638}
        r={17.638}
        fill={color}
        stroke={theme.colors.onSurface}
        strokeWidth={2}
      />
    </Svg>
  )
}
export default InitialSVG