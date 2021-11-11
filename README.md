# timingsrc-multidevice-example
A working example of timingsrc for multi device audio sync using React.

I have created this example repo for others to play around with and to build from.

## How to run
1. Clone this repository.
2. cd into this repository's folder on your machine.
3. Run
  ```
  npm install
  ```
4. Replace the `socketURL` in `App.jsx` with your machine's local network IP.
5. Run
  ```
  npm start
  ```
7. In another terminal window run
  ```
  npx timing-provider-server
  ```
  This will provide the timing server for your devices to connect to.
8. Open `localhost:8080` or wherever the React app is running on your machine.
9. Get a another device, e.g. phone or tablet, that is connected to the same network as the machine you're running the app and timing provider server on.
10. Open the web page on that device using the local network IP of your machine.
11. Play around with the controls and see what happens :)

## Notes on performance
On mobile devices you must tap on the native HTML "play" control before trying to use the stream controls otherwise it won't play. I think this is something to do with browser permissions not allowing autoplay but not entirely sure.

Audio seemed to sync well for me between devices connected to the machine I was running the web server on, e.g. phones and tablets. The machine running the timing server seemed to run a few milliseconds too early. Perhaps this is due to effectively zero latency between it and the timing server because they're running on the same device.

Safari seemed to not like to have its playback position reset for some reason but then it fixed itself.
