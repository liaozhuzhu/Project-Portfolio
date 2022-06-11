// when the DOM is ready
$(document).ready(function() {
  const menuBtn = $('about-button');
  menuBtn.click(()=>{	
    setTimeout(()=>{
      removeHash();
    }, 5); 
  });
  function removeHash(){
    history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
  }
});
