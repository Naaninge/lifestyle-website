

 const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// this is an error handler function to check if html element  exists
 const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    console.log(element);
    return element;
  } else {
    return `Element with ${selector} not found`;
  }
};

export { getElement, fetchData };
