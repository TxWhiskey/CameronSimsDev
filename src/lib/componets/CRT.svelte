<script>

</script>

<div class="crt">
    <slot></slot>
</div>

<style>

@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
}
@keyframes textShadow {
  0% {
    text-shadow: 0.4px 0 1px rgba(0,30,255,0.25), -0.4px 0 1px rgba(255,0,80,0.23);
  }
  5% {
    text-shadow: 1.8px 0 1px rgba(0,30,255,0.25), -1.8px 0 1px rgba(255,0,80,0.23);
  }
  10% {
    text-shadow: 0.0px 0 1px rgba(0,30,255,0.25), -0.0px 0 1px rgba(255,0,80,0.23);
  }
  15% {
    text-shadow: 0.4px 0 1px rgba(0,30,255,0.25), -0.4px 0 1px rgba(255,0,80,0.23);
  }
  20% {
    text-shadow: 1.5px 0 1px rgba(0,30,255,0.25), -1.5px 0 1px rgba(255,0,80,0.23);
  }
  25% {
    text-shadow: 1.6px 0 1px rgba(0,30,255,0.25), -1.6px 0 1px rgba(255,0,80,0.23);
  }
  30% {
    text-shadow: 0.7 0 1px rgba(0,30,255,0.25), -0.7 0 1px rgba(255,0,80,0.23);
  }
  35% {
    text-shadow: 1.9 0 1px rgba(0,30,255,0.25), -1.9 0 1px rgba(255,0,80,0.23);
  }
  40% {
    text-shadow: 1.9 0 1px rgba(0,30,255,0.25), -1.9 0 1px rgba(255,0,80,0.23);
  }
  45% {
    text-shadow: 0.2 0 1px rgba(0,30,255,0.25), -0.2 0 1px rgba(255,0,80,0.23);
  }
  50% {
    text-shadow: 0.1 0 1px rgba(0,30,255,0.25), -0.1 0 1px rgba(255,0,80,0.23);
  }
  55% {
    text-shadow: 0.4 0 1px rgba(0,30,255,0.25), -0.4 0 1px rgba(255,0,80,0.23);
  }
  60% {
    text-shadow: 0.2 0 1px rgba(0,30,255,0.25), -0.2 0 1px rgba(255,0,80,0.23);
  }
  65% {
    text-shadow: 0.9 0 1px rgba(0,30,255,0.25), -0.9 0 1px rgba(255,0,80,0.23);
  }
  70% {
    text-shadow: 0.5 0 1px rgba(0,30,255,0.25), -0.5 0 1px rgba(255,0,80,0.23);
  }
  75% {
    text-shadow: 1.9 0 1px rgba(0,30,255,0.25), -1.9 0 1px rgba(255,0,80,0.23);
  }
  80% {
    text-shadow: 0.1 0 1px rgba(0,30,255,0.25), -0.1 0 1px rgba(255,0,80,0.23);
  }
  85% {
    text-shadow: 0.1 0 1px rgba(0,30,255,0.25), -0.1 0 1px rgba(255,0,80,0.23);
  }
  90% {
    text-shadow: 1.4 0 1px rgba(0,30,255,0.25), -1.4 0 1px rgba(255,0,80,0.23);
  }
  95% {
    text-shadow: 0.2 0 1px rgba(0,30,255,0.25), -0.2 0 1px rgba(255,0,80,0.23);
  }
  100% {
    text-shadow: 0.6 0 1px rgba(0,30,255,0.25), -0.6 0 1px rgba(255,0,80,0.23);
  }
}
.crt::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}
.crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size: 100% 2px, 3px 100%;
  pointer-events: none;
}
.crt {
  animation: textShadow 4s infinite;
}

</style>