<script lang="ts">
</script>

<div class="container">
  <svg
  viewBox="0 0 50 50"
  xmlns="http://www.w3.org/2000/svg"
  style="
  fill:none;
  stroke:var(--color-vlight);
  stroke-width:3px;
  ">
  <g id='sig-group'>
    <path
       d="m 0.86586327,32.251059 c 0,0 5.86814273,-4.042302 5.80802303,-7.278495 -0.057686,-3.105159 -5.82311954,-7.230457 -5.82311954,-7.230457 0,0 2.87206884,4.649398 2.91910794,7.230457 0.05056,2.774262 -2.90401143,7.278495 -2.90401143,7.278495 z"
       vector-effect="non-scaling-stroke"
       id="sig-1" />
    <path
       d="m 11.517844,41.922702 c 0,0 13.692333,-9.432037 13.552053,-16.983158 -0.1346,-7.245368 -13.587279,-16.8710655 -13.587279,-16.8710655 0,0 6.701495,10.8485955 6.811252,16.8710655 0.117975,6.47328 -6.776026,16.983158 -6.776026,16.983158 z"
       vector-effect="non-scaling-stroke"
       id="sig-2" />
    <path
       d="m 29.638294,49.176433 c 0,0 19.560475,-13.474338 19.360076,-24.261653 C 48.806085,14.564253 29.587972,0.8132574 29.587972,0.8132574 c 0,0 9.573562,15.4979946 9.73036,24.1015226 0.168533,9.247541 -9.680038,24.261653 -9.680038,24.261653 z"
       vector-effect="non-scaling-stroke"
       id="sig-3" />
  </g>
</svg>

</div>

<style>

  .container {
    max-height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
  }

  svg {
    width: 100%;
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
  
  @media (min-width: 500px) {
        svg {
        }
    }


</style>
