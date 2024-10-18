import { useMaterial3Theme } from "@pchmn/expo-material3-theme"
import * as React from "react"
import { useTheme } from "react-native-paper"
import Svg, { Path, Ellipse, G, SvgProps } from "react-native-svg"
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

function IndexSVG(props:SvgProps) {
    const theme = {...MD3LightTheme}
    const syncTheme = useTheme()
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      className="w-full h-full"
      {...props}
    >
      <Path
        d="M43 353.395s1.295-48.3 12.951-78.734c11.655-30.433 33.024 20.313 44.032 12.423 11.008-7.89 22.952-87.846 63.601-104.526 40.65-16.68 43.982 19.982 63.684 36.617 19.702 16.635 46.548-83.084 81.217-83.084 24.762 0 37.654 34.627 45.833 52.987 6.008 13.486 9.643 28.344 18.529 40.396 12.988 17.615 27.581 11.719 44.109 2.104 6.86-3.991 14.943-7.34 22.567-5.134 6.729 1.947 11.539 7.792 15.356 13.665 13.608 20.939 18.756 44.813 18.859 69.496.014 3.315.005 43.79-.134 43.79H43z"
        fill={syncTheme.colors.surfaceVariant}
      />
      <Path
        d="M152.977 162.5L142.512 220.817 147.465 218.025 170.221 162.5z"
        fill={theme.colors.primary}
      />
      <Path
        d="M142.512 220.817L134.774 228.146 146.297 224.025 147.465 218.025z"
        fill={theme.colors.primary}
      />
      <Path
        d="M357.167 360.695c0 1.578-44.509 2.858-99.413 2.858-54.904 0-99.413-1.28-99.413-2.858 0-1.579 44.509-2.858 99.413-2.858 54.904 0 99.413 1.28 99.413 2.858z"
        fill={syncTheme.colors.surfaceVariant}
      />
      <Path
        d="M341.443 171.628H171.017c-7.841 0-14.198 7.149-14.198 15.968v121.036c0 8.819 6.357 15.968 14.198 15.968h61.811l23.403 28.795 20.602-28.795h64.611c7.841 0 14.198-7.149 14.198-15.968V187.596c-.002-8.819-6.358-15.968-14.199-15.968z"
        fill="#e07575"
      />
      <Path
        d="M302.762 238.894l-.009-.001c.105-.899.173-1.808.173-2.735 0-12.921-10.475-23.396-23.396-23.396-12.669 0-22.96 7.005-23.358 19.577l-.076-.006c-.401-12.57-10.691-19.571-23.358-19.571-12.921 0-23.396 10.475-23.396 23.396a23.287 23.287 0 005.225 14.725l-.003.003.019.017c1.475 1.814 7.66 9.182 9.608 10.485l31.943 27.409 32.619-28.345c3.024-2.797 7.527-7.798 9.077-9.744l.045-.041.018-.043a23.255 23.255 0 004.854-11.699l.015-.031z"
        fill={theme.colors.elevation.level1}
      />
      <Ellipse
        cx={148.891}
        cy={430.907}
        rx={55.891}
        ry={4.093}
        fill={syncTheme.colors.surfaceVariant}
      />
      <Path d="M195.446 228.119H204.782V246.566H195.446z" fill={theme.colors.primary} />
      <Path
        d="M155.245 244.766s-16.825-3.824-21.774 5.399c-4.949 9.223-1.125 19.122-.9 24.52.225 5.399-11.023 19.346-8.548 31.269 2.475 11.923 11.473 20.246 25.195 17.322 0 0-3.824 1.8-6.299 2.699 0 0 17.547 3.15 26.545-11.248 8.998-14.397-4.949-30.594-5.624-35.768-.675-5.174 9.13-29.019-8.595-34.193z"
        fill={theme.colors.primary}
      />
      <Path
        d="M133.245 329.125l-17.829 91.108h8.25l32-71.566-14.886-16.49c.001 0-3.193-.3-7.535-3.052z"
        fill={theme.colors.primary}
      />
      <Path
        d="M159.79 329.125l22.876 91.125-10.188-.017L134.333 330s14.772 2.499 25.457-.875z"
        fill={theme.colors.primary}
      />
      <Path
        d="M124.022 305.954c-1.079-5.198.451-10.781 2.501-15.872 0 0-11.274 16.773-13.974 20.822-2.699 4.049 20.696 18.222 20.696 18.222l2.461-6.974-.003-.012c-6.109-2.807-10.149-8.802-11.681-16.186z"
        fill={theme.colors.inversePrimary}
      />
      <Path
        d="M142.919 325.975c2.475-.9 6.299-2.699 6.299-2.699-6.427 1.37-11.802.249-15.972-2.53v8.379c4.949 6.974 26.545 0 26.545 0l-.968-5.193c-7.947 3.464-15.904 2.043-15.904 2.043zM171.923 298.979l26.11-38.017-4.049-4.274-26.836 29.748c1.794 3.556 3.821 7.892 4.775 12.543z"
        fill={theme.colors.inversePrimary}
      />
      <Path
        d="M118.061 420.233L117.161 423.832 121.772 423.832 122.222 420.233z"
        fill="#e2756b"
      />
      <Path
        d="M172.478 420.233L173.625 423.832 179.249 423.832 178.012 420.233z"
        fill="#e2756b"
      />
      <Path
        d="M117.161 423.832L113.224 429.794 122.222 429.794 121.772 423.832z"
        fill={theme.colors.primary}
      />
      <Path
        d="M173.625 423.832L173.625 429.794 191.397 429.794 179.249 423.832z"
        fill={theme.colors.primary}
      />
      <Path
        d="M193.984 256.688l3.262-4.499s-.675-3.149-1.012-4.949c-.337-1.8-.675-3.824.337-3.824s2.25 1.912 3.599 1.237c1.35-.675 1.462-6.411 3.599-7.086 2.137-.675 3.149 4.949 2.924 7.761-.225 2.812-9.205 15.061-9.205 15.061l-3.504-3.701z"
        fill={theme.colors.primary}
      />
      <G>
        <Ellipse
          cx={399.333}
          cy={360.695}
          rx={64.667}
          ry={4.305}
          fill={syncTheme.colors.surfaceVariant}
        />
        <Path
          d="M368.935 360.108L452.656 360.108 452.656 355.36 368.935 341.412z"
          fill={theme.colors.primary}
        />
        <Path
          d="M458.591 360.108L459.333 344.565 452.656 355.36 452.656 360.108z"
          fill={theme.colors.primary}
        />
        <Path
          d="M368.671 314.406s.594-1.484 0-3.116c-.594-1.632-7.716-11.574-16.025-11.871-8.309-.297-10.832 2.226-9.942 6.677.89 4.452 6.224 3.71 11.05 4.081 4.827.371 11.059 6.603 14.917 4.229z"
          fill={theme.colors.primary}
        />
        <Path
          d="M366.63 329.096c.023-6.483-1.038-11.605-1.801-14.448-3.496-.986-7.64-4.206-11.075-4.47-2.999-.23-6.193-.033-8.396-.917l-.002.001s-6.659 19.836-6.659 30.964c0 11.129 8.458 15.135 8.458 15.135 6.084-7.864 21.779-13.948 21.779-13.948s-2.34-2.227-2.304-12.317z"
          fill={theme.colors.primary}
        />
        <Path
          transform="rotate(32.669 390.34 303.656)"
          d="M389.348 296.392H391.351V310.93399999999997H389.348z"
          fill={theme.colors.primary}
        />
        <Path
          d="M383.592 318.392l2.526-2.995s-.583-2.72-.874-4.274c-.291-1.554-.583-3.303.291-3.303.874 0 1.943 1.651 3.108 1.069 1.166-.583 1.263-5.537 3.109-6.12 1.846-.583 2.72 4.274 2.526 6.703-.194 2.428-7.276 11.671-7.276 11.671l-3.41-2.751zM372.529 278.244s7.122 3.962 6.974 13.162-8.755 13.8-16.47 12.761l-.742 4.748s-3.413.297-6.974-3.264l.89-9.942s-2.968-2.671-2.374-6.232c.594-3.561 2.522-3.858 3.858-3.413 1.335.445 1.929 5.045 1.929 5.045s4.452-2.374 5.045-9.793c0 0 6.529-.802 7.864-3.072z"
          fill="#e2756b"
        />
        <Path
          d="M378.019 264.698c-4.303-2.374-11.389 6.529-11.389 6.529s-6.565-.89-11.165 2.671c-4.6 3.561-11.666 17.404.567 23.766l.175-1.953s-2.968-2.671-2.374-6.232c.594-3.561 2.522-3.858 3.858-3.413 1.335.445 1.929 5.045 1.929 5.045s4.452-2.374 5.045-9.793c0 0 6.529-.802 7.864-3.072 0 0 3.318 1.851 5.378 5.951l.001-.002s2.189-1.839-1.076-8.516c0 0 1.903-1.376 2.673-3.561 0-.001 2.817-5.046-1.486-7.42z"
          fill={theme.colors.primary}
        />
        <Path
          d="M360.065 323.457s-.202-7.271-4.33-9.942c-4.128-2.671-9.618 1.187-9.321 8.013.297 6.826 5.787 22.258 12.761 26.709s28.49-26.561 28.49-26.561l-4.6-3.71-20.774 18.993c0 .001-1.781-5.637-2.226-13.502z"
          fill={theme.colors.primary}
        />
        <Path
          d="M347.156 355.36s8.54 8.309 21.779 4.748c13.239-3.561 31.045-33.09 31.045-33.09l7.798 28.341h7.735s-6.036-36.795-7.816-41.442c-1.781-4.647-8.31-1.667-9.645-.338-1.335 1.329-29.116 27.832-29.116 27.832s-17.626 7.42-21.78 13.949z"
          fill={theme.colors.inversePrimary}
        />
        <Path
          d="M409.328 360.995L407.778 355.36 415.512 355.36 426.392 360.995z"
          fill={theme.colors.primary}
        />
      </G>
      <G>
        <Path
          d="M166.938 100.948s-3.313 8.549 1.985 16.947c4.212 5.592 15.637 1.526 17.603.106 0 0-.884-2.525-1.025-6.27-.141-3.745-1.025-6.27-5.151-6.538-4.126-.268-9.628-.311-13.412-4.245z"
          fill="#e2756b"
        />
        <Path
          d="M194.16 96.498c-5.22-8.882-13.57-10.971-18.183-10.374s-11.367 1.544-13.99 9.51c-2.623 7.966 3.84 12.876 3.84 12.876l.129.045c-.249-4.404.982-7.606.982-7.606 3.783 3.935 9.286 3.978 13.412 4.245s5.01 2.792 5.151 6.538c.141 3.745 1.025 6.27 1.025 6.27 2.563 3.192 4.764 2.833 4.764 2.833-2.407-1.648-3.634-5.53-3.575-8.052.059-2.522-.391-5.275-1.862-7.547-1.47-2.272-2.354-4.797.857-5.322 3.212-.525 3.348.787 3.595 3.259.247 2.472-1.671 4.669-.99 6.913.681 2.244 1.926 3.139 1.926 3.139 7.575-2.65 8.139-7.845 2.919-16.727z"
          fill={theme.colors.primary}
        />
        <Path
          d="M183.666 87.253s-1.541-3.861 1.852-5.201c3.392-1.34 10.818 2.785 13.759 7.329 2.941 4.544-.98 7.933-5.117 7.117 0 0-3.167-6.487-10.494-9.245z"
          fill={theme.colors.primary}
        />
        <Path
          d="M192.174 112.858c-.303.125-.603.252-.933.368 0 0-1.245-.896-1.926-3.139-.681-2.244 1.237-4.442.99-6.913-.247-2.472-.383-3.784-3.595-3.259-3.212.525-2.328 3.05-.857 5.322 1.471 2.272 1.92 5.025 1.862 7.547-.052 2.22.895 5.489 2.763 7.365 1.508-3.18 3.811-4.66 3.811-4.66-1.761-.454-2.96-2.418-2.96-2.418l.845-.213z"
          fill="#e2756b"
        />
        <Path
          d="M189.584 153.033s3.658 2.311 7.546 3.503l7.047-11.171s-10.637-22.363-11.872-29.316l-2.72 3.377s-4.018 6.381-4.966 9.396c-.948 3.016.172 5.859 2.843 8.702 2.67 2.844 3.555 9.909 2.122 15.509z"
          fill={theme.colors.primary}
        />
        <Path
          d="M187.462 137.525a15.002 15.002 0 01-1.857-2.401l-.008.003-7.698 9.98-13.699-17.404s.775-5.428 0-6.203c-.776-.776-2.154-.086-2.671 2.671 0 0-5.083-3.877-7.668-3.446-2.585.431-2.413 4.394 1.637 6.979s4.911 2.671 4.911 2.671 11.029 23.349 17.404 24.9c3.176.429 12.229-10.531 12.296-10.611-.344-2.994-1.247-5.649-2.647-7.139z"
          fill="#e2756b"
        />
        <Path
          d="M189.584 153.033l-33.733 7.024c-3.471.723-5.347 4.505-3.824 7.706l20.96 44.031h4.825l-8.503-39.806c7.02 1.817 17.48-.27 32.182-.27 4.451 0 5.485-7.239 4.701-14.499 0 0-9.488.639-16.608-4.186z"
          fill={theme.colors.inversePrimary}
        />
        <Path
          d="M172.987 211.795L172.125 225.753 178.893 215.413 177.812 211.795z"
          fill={theme.colors.primary}
        />
        <Path
          transform="rotate(-27.07 156.489 119.038)"
          d="M155.344 110.605H157.67V127.492H155.344z"
          fill={theme.colors.primary}
        />
        <Path
          d="M153.859 120.723s1.264-.657 3.188-.033c1.924.624 2.896 5.026 2.266 6.407-.629 1.381-5.454-6.374-5.454-6.374zM197.442 115.037s-4.246-1.404-6.424 2.357 13.158 27.972 13.158 27.972l-13.37 21.195s-5.413.086-6.533 1.378c-1.12 1.292-.431 5.084.517 6.462.948 1.379 2.326 2.93 4.222 3.102 1.896.172 1.057-5.051 2.436-5.482 1.679 0 3.768.111 4.199-2.302 0 0 16.801-19.098 17.749-21.855.947-2.757-7.46-26.139-15.954-32.827z"
          fill="#e2756b"
        />
      </G>
      <G>
        <Ellipse cx={300.417} cy={434.404} rx={33} ry={3.346} fill={syncTheme.colors.surfaceVariant} />
        <Path
          d="M289.069 360.108s-8.239 3.168-11.147 13.527c-2.908 10.358 3.843 13.266 1.921 21.02-1.921 7.754-5.337 8.819-2.66 19.191 2.677 10.372 15.277 17.212 15.277 17.212s14.09-9.749 9.953-33.011c-1.714-11.572-8.014-13.931-6.561-24.412 1.455-10.481-6.783-13.527-6.783-13.527z"
          fill={theme.colors.primary}
        />
        <Path
          d="M276.198 434.114s.485-12.528 8.723-16.405c8.239-3.877 14.807 5.376 14.807 5.376s2.155-19.412 12.817-22.086c10.662-2.674 14.539 20.442 14.539 33.115h-50.886z"
          fill={theme.colors.inversePrimary}
        />
        <Path
          d="M421.471 376.333s.371-9.603 6.687-12.575c6.315-2.972 11.35 4.121 11.35 4.121s1.652-14.88 9.825-16.93c8.173-2.05 11.145 15.67 11.145 25.384h-39.007z"
          fill={theme.colors.primary}
        />
      </G>
      <G>
        <Ellipse cx={72.542} cy={359.32} rx={42.625} ry={2.93} fill={syncTheme.colors.surfaceVariant} />
        <Path
          d="M53.348 256.688s-11.333 4.359-15.333 18.608 5.286 18.249 2.643 28.916c-2.643 10.667-7.341 12.132-3.659 26.399 3.682 14.267 21.016 23.678 21.016 23.678s19.383-13.41 13.691-45.41c-2.358-15.919-11.025-19.165-9.025-33.582 2.001-14.419-9.333-18.609-9.333-18.609z"
          fill={theme.colors.primary}
        />
        <Path
          d="M35.643 358.493s.667-17.233 12-22.566c11.333-5.333 20.368 7.395 20.368 7.395s2.965-26.704 17.632-30.383c14.667-3.679 20 28.121 20 45.554h-70z"
          fill={theme.colors.inversePrimary}
        />
      </G>
    </Svg>
  )
}

export default IndexSVG