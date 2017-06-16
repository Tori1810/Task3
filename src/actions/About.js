
export default function about() {
  return {
    type: 'ABOUT',
    payload: fetch('http://maysternja.dataroot.co/about/').then(function(response) {
      response.json().then(function(data) {
        return data;
      });
    }),
  };
}
