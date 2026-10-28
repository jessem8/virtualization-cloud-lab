# Presenter enhancement · 28 October 2026

Scope: the local 3D presenter only (docs/network-lab-3d.html). No VM, network or host setting was touched. Every animation remains an explanatory simulation of the planned architecture, not a test result.

## What changed

- Rendering (diagram/fx.mjs): room environment lighting, soft shadows updated only on layout changes, selective bloom on LEDs/screens/packet, ACES tone mapping, hover outline, SMAA and vignette. "Qualité visuelle" in Options switches to an economy mode; the presenter also falls back automatically when the median frame time exceeds about 28 ms.
- Camera (diagram/camera.mjs, camera-controls 3.1.2): opening fly-in, per-step framing that keeps the isometric angle, a dead zone that avoids re-framing for small changes, left-drag rotate, right-drag pan, zoom to cursor, target bounded to the lab. A manual move pauses story framing until the next step; Options → Caméra libre disables it.
- Packet (diagram/packet.mjs): layered frame with the 802.1Q tag added/removed on the trunk, trail and dashed flow line, exploded view on P with one card per layer, firewall gate (green pass, red refusal with shake and recoil).
- Et si… ? (diagram/whatif.mjs, policy in topology.json): five simulated faults rebuild a path and stop the packet at the break point, in 3D and 2D.
- Quiz mode (diagram/quiz.mjs): six questions before key presentation steps, keys 1/2/3, score at the end. Off by default.
- Readability pass after user feedback: during a step only the involved machines keep their names (others show their icon; the name returns on hover); the packet tag is one word; labels keep their slot and glide instead of jumping; per-frame hide/show of packet labels that restarted their fade (flicker) was removed; label positions are whole pixels.
- Full screen: hides header, toolbar, legend, transport strip, scenario picker and speaker notes. Only the scene and a dark story band remain; the exit button and cursor fade after inactivity.
- Pre-existing icon textures had no intrinsic size and produced WebGL "bad image data" warnings; they now declare 128 × 128.

## Checks actually performed

- `node --check` on every module and `node build.mjs`: pass. Bundle 1.1 MB (was about 0.7 MB) with camera-controls and postprocessing; licences copied.
- Playwright Chromium against the loopback server at 1920 × 1080 and 1366 × 768: overview, guided steps 1–5 and 16, firewall pass and refusal gates, exploded packet open/close and button label, what-if with "câble trunk" and "SW-B" faults, 2D break marker, quiz question and answer, reduced motion and the full-screen layout. No page errors; the console shows only the missing favicon.
- Full screen was checked by applying the presentation layout class; the browser Fullscreen API itself was not exercised in the headless browser.

## Not verified

- Frame rate and the automatic quality fallback on real hardware: the test browser rendered in software at about 1 frame per second, so timings and smoothness there are not representative.
- Projection on the classroom display and behaviour on Machine B.
- Screenshots were kept outside the repository.
