function setup() {
  noCanvas();
}


const response = await axios.get('https://api.ipify.org?format=json');

let ip= response.data.ip;
// console.log("ip value is",ip)
// export {ip}


let lat, lon;
  const button = document.getElementById('submit');
  button.addEventListener('click', async event => {


    const data = {ip};

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    const response = await fetch('/postapi', options);
    // const json = await response.json();
    // console.log(json);

  });

 