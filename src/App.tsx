import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  container: { flex: 1 },
  flexBox: { flex: 1, alignContent: 'center', justifyContent: 'center' },
});

const App = () => {
  const webref = useRef<WebView>(null);

  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <button id="button">네이티브 이벤트</button>
      <script>
        const CUSTOM_EVENT = 'CUSTOM_EVENT';
        window.addEventListener(CUSTOM_EVENT, (e) => {
          if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(JSON.stringify(e.detail));
          }
        });
  
        const $button = document.getElementById('button');
        $button.addEventListener('click', (e) => {
          dispatchEvent(
            new CustomEvent(CUSTOM_EVENT, {
              detail: { type: '이벤트타입', params: '파라미터..' },
            }),
          );
        });
      </script>
    </body>
  </html>
  
`;

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webref}
        source={{ html }}
        onMessage={(event) => {
          console.log(event.nativeEvent);
          alert(event.nativeEvent.data);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
