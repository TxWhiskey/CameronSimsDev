<script lang="ts">
  export let size: string = "100%";
  export let strokeWidth: string = "2";
</script>

<div class="container" style="height: {size};">
  <svg
    viewBox="0 0 55 39.687433"
    xmlns="http://www.w3.org/2000/svg"
    height='100%'
  >
    <g
      fill="none"
      stroke="var(--color-vlight)"
      stroke-width="1"
    >
      <!-- Signals -->
      <g id="sig-group">
        <!-- Sig 1 -->
        <path
          class="sig"
          id="sig-1"
          d="m 0.0759,13.23145 c -0.0142,0.76705 0.3084,0.55511 1.0976,1.7239 1.7555,2.5985 2.3858,5.3623 0.9434,8.2391 -0.48633,0.97029 -1.9414,2.6198 -2.1169,3.2272 0.63341,0.15895 0.98531,-0.19769 1.6108,-0.61918 7.7734,-5.2429 1.0573,-12.633 -1.5349,-12.571"
        />
        <!-- Sig 2 -->
        <path
          class="sig"
          id="sig-2"
          d="m 16.5059,6.6114503 c -0.0284,1.5341 0.6168,1.1103 2.1952,3.4477997 3.511,5.197 4.7716,10.725 1.8868,16.478 -0.97266,1.9406 -3.8827,5.2397 -4.2338,6.4543 1.2668,0.31789 1.9706,-0.39539 3.2216,-1.2384 15.547,-10.486 2.1146,-25.2649997 -3.0698,-25.1419997"
        />
        <!-- Sig 3 -->
        <path
          class="sig"
          id="sig-3"
          d="M 38.1859,0.00145033 C 38.1433,2.3026503 39.11111,1.6668503 41.4787,5.1731503 46.7453,12.96865 48.636,21.26015 44.3089,29.89015 c -1.459,2.9109 -5.8241,7.8596 -6.3508,9.6815 1.9002,0.47684 2.9559,-0.59308 4.8324,-1.8575 23.32,-15.729 3.1718,-37.89799967 -4.6047,-37.71299967"
        />
      </g>
    </g>
  </svg>
</div>

<style>

  svg {
    z-index: -1;
    margin-top: auto;
  }

  #sig-group {
    animation: swap-signal 10s infinite step-end;
    transform-box: fill-box;
    transform-origin: center;
  }

  #sig-1 {
    opacity: 0;
    animation: cycle-signal-1 5s infinite ease-in-out;
  }

  #sig-2 {
    opacity: 0;
    animation: cycle-signal-2 5s infinite ease-in-out;
  }

  #sig-3 {
    opacity: 0;
    animation: cycle-signal-3 5s infinite ease-in-out;
  }

  @keyframes cycle-signal-1 {
    14.29% {
      opacity: 0;
    }

    28.57% {
      opacity: 100;
    }

    71.43% {
      opacity: 0;
    }
  }

  @keyframes cycle-signal-2 {
    28.57% {
      opacity: 0;
    }

    42.86% {
      opacity: 100;
    }

    85.71% {
      opacity: 0;
    }
  }

  @keyframes cycle-signal-3 {
    42.86% {
      opacity: 0;
    }

    57.14% {
      opacity: 100;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes swap-signal {
    50% {
      transform: rotate(180deg);
    }
  }
  
  @media (max-width: 500px) {
    
  }


</style>
