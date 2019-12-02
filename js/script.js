$('#cleanse_button').on('click', function(){
  $.ajax({
    //url: 'http://localhost:3000/todos',
    url: 'https://quimicos-back.herokuapp.com/quimicos',

    // url: 'https://tuapp.herokuapp.com/todos',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      $('#quimicos-list').empty();

      let newHtml = ''

      for( let i = 0; i < data.length; i++) {
        // aqui va su código para agregar los elementos de la lista
        //console.log(data[i].description)
        newHtml += `
          <li class="liQuimico" style="list-style-type:none">
          <legend name="producto" value=${data.length + 1}>
          <span class="titlesQuimicos">${data[i].name}</span>
          <br>

          `
        if (data[i].acuteHealthEffects != '' || data[i].chronicHealthEffects != '') {
            newHtml += `
            <span class="subtitleQuimico">Hazards: </span>
            <br>
            `
          }

        if (data[i].acuteHealthEffects != '') {
            newHtml += `
              <div class="categoriaQuimico"><b>Potential Acute Health Effects:</b> ${data[i].acuteHealthEffects}</div>
              `
          }

        if (data[i].chronicHealthEffects != '') {
            newHtml += `
              <div class="categoriaQuimico"><b>Potential Chronic Health Effects:</b> ${data[i].chronicHealthEffects}</div>
              `
        }

        if (data[i].eyeContact || data[i].skinContact || data[i].seriousSkinContact
          || data[i].inhalation || data[i].seriousInhalation || data[i].ingestion
          || data[i].seriousIngestion){
            newHtml += `
          <br>
          <span class="subtitleQuimico">First Aid: </span>
          <br>
          `
        }

        if (data[i].eyeContact != '') {
            newHtml += `
              <div><b>Eye Contact:</b> ${data[i].eyeContact}</div>
              `
          }
        if (data[i].skinContact != '') {
              newHtml += `
                <div class="categoriaQuimico"><b>Skin Contact:</b> ${data[i].skinContact}</div>
                `
            }
            // if (data[i].seriousSkinContact != '') {
            //       newHtml += `
            //         <div>Serious Skin Contact: ${data[i].seriousSkinContact}</div>
            //         `
            // }
            if (data[i].inhalation != '') {
                  newHtml += `
                    <div class="categoriaQuimico"><b>Inhalation:</b> ${data[i].inhalation}</div>
                    `
                }
            // if (data[i].seriousInhalation != '') {
            //       newHtml += `
            //         <div>Serious Inhalation: ${data[i].seriousInhalation}</div>
            //         `
            // }
            if (data[i].ingestion != '') {
                  newHtml += `
                    <div class="categoriaQuimico"><b>Ingestion:</b> ${data[i].ingestion}</div>
                    `
            }
            // if (data[i].seriousIngestion != '') {
            //       newHtml += `
            //         <div>Serious Ingestion: ${data[i].seriousIngestion}</div>
            //         `
            // }

          newHtml += `
          <div></div>
          </li>`
        // algo asi:
        // addTodo(data[i]._id, data[i].description, data[i].completed)
        // no tienen que usar la funcion de addTodo, es un ejemplo

      }
      $('#quimicos-list').append(newHtml)
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});


  $.ajax({
    //url: 'http://localhost:3000/todos',
    url: 'https://quimicos-back.herokuapp.com/quimicos',

    // url: 'https://tuapp.herokuapp.com/todos',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data)

      let newHtml = ''

      for( let i = 0; i < data.length; i++) {
        // aqui va su código para agregar los elementos de la lista
        //console.log(data[i].description)
        newHtml += `
          <li class="liQuimico" style="list-style-type:none">
          <legend name="producto" value=${data.length + 1}>
          <span class="titlesQuimicos">${data[i].name}</span>
          <br><br>

          `
        if (data[i].acuteHealthEffects != '' || data[i].chronicHealthEffects != '') {
            newHtml += `
            <span class="subtitleQuimico">Hazards: </span>
            <br><br>
            `
          }

        if (data[i].acuteHealthEffects != '') {
            newHtml += `
              <div class="categoriaQuimico"><b>Potential Acute Health Effects:</b> ${data[i].acuteHealthEffects}</div>
              `
          }

        if (data[i].chronicHealthEffects != '') {
            newHtml += `
              <div class="categoriaQuimico"><b>Potential Chronic Health Effects:</b> ${data[i].chronicHealthEffects}</div>
              `
        }

        if (data[i].eyeContact || data[i].skinContact || data[i].seriousSkinContact
          || data[i].inhalation || data[i].seriousInhalation || data[i].ingestion
          || data[i].seriousIngestion){
            newHtml += `
          <br>
          <span class="subtitleQuimico">First Aid: </span>
          <br><br>
          `
        }

        if (data[i].eyeContact != '') {
            newHtml += `
              <div class="categoriaQuimico"><b>Eye Contact:</b> ${data[i].eyeContact}</div>
              `
          }
        if (data[i].skinContact != '') {
              newHtml += `
                <div class="categoriaQuimico"><b>Skin Contact:</b> ${data[i].skinContact}</div>
                `
            }
            // if (data[i].seriousSkinContact != '') {
            //       newHtml += `
            //         <div>Serious Skin Contact: ${data[i].seriousSkinContact}</div>
            //         `
            // }
            if (data[i].inhalation != '') {
                  newHtml += `
                    <div class="categoriaQuimico"><b>Inhalation:</b> ${data[i].inhalation}</div>
                    `
                }
            // if (data[i].seriousInhalation != '') {
            //       newHtml += `
            //         <div>Serious Inhalation: ${data[i].seriousInhalation}</div>
            //         `
            // }
            if (data[i].ingestion != '') {
                  newHtml += `
                    <div class="categoriaQuimico"><b>Ingestion:</b> ${data[i].ingestion}</div>
                    `
            }
            // if (data[i].seriousIngestion != '') {
            //       newHtml += `
            //         <div>Serious Ingestion: ${data[i].seriousIngestion}</div>
            //         `
            // }

          newHtml += `
          <div></div>
          </li>`
        // algo asi:
        // addTodo(data[i]._id, data[i].description, data[i].completed)
        // no tienen que usar la funcion de addTodo, es un ejemplo

      }
      $('#quimicos-list').append(newHtml)
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });




    let searchButton = document.getElementById( "searchButton" );

    searchButton.addEventListener("click", ( event ) =>{
      event.preventDefault();
        let searchBar = document.getElementById( "searchTerm" );
        let searchTerm = searchBar.value;
        let listaProductos = document.getElementById("quimicos-list");
        listaProductos.innerHTML = "";
        $.ajax({
          url: 'https://quimicos-back.herokuapp.com/quimicos',

          headers: {
              'Content-Type':'application/json'
          },
          method: 'GET',
          dataType: 'json',
          success: function(data){
            $('#quimicos-list').empty();

            let found = false;
            let newHtml = '';
            data.forEach((item)=>{
              if (item.name == searchTerm) {
              found = true;
              newHtml += `
                <li class="liQuimico" style="list-style-type:none">
                <legend name="producto" value=${item.length + 1}>
                <span class="titlesQuimicos">${item.name}</span>
                <br>

                `
              if (item.acuteHealthEffects != '' || item.chronicHealthEffects != '') {
                  newHtml += `
                  <span class="subtitleQuimico">Hazards: </span>
                  <br>
                  `
                }

              if (item.acuteHealthEffects != '') {
                  newHtml += `
                    <div class="categoriaQuimico"><b>Potential Acute Health Effects:</b> ${item.acuteHealthEffects}</div>
                    `
                }

              if (item.chronicHealthEffects != '') {
                  newHtml += `
                    <div class="categoriaQuimico"><b>Potential Chronic Health Effects:</b> ${item.chronicHealthEffects}</div>
                    `
              }

              if (item.eyeContact || item.skinContact || item.seriousSkinContact
                || item.inhalation || item.seriousInhalation || item.ingestion
                || item.seriousIngestion){
                  newHtml += `
                <br>
                <span class="subtitleQuimico">First Aid: </span>
                <br>
                `
              }

              if (item.eyeContact != '') {
                  newHtml += `
                    <div class="categoriaQuimico"><b>Eye Contact:</b> ${item.eyeContact}</div>
                    `
                }
              if (item.skinContact != '') {
                    newHtml += `
                      <div class="categoriaQuimico"><b>Skin Contact:</b> ${item.skinContact}</div>
                      `
                  }
                  // if (item.seriousSkinContact != '') {
                  //       newHtml += `
                  //         <div>Serious Skin Contact: ${item.seriousSkinContact}</div>
                  //         `
                  // }
                  if (item.inhalation != '') {
                        newHtml += `
                          <div class="categoriaQuimico"><b>Inhalation:</b> ${item.inhalation}</div>
                          `
                      }
                  // if (item.seriousInhalation != '') {
                  //       newHtml += `
                  //         <div>Serious Inhalation: ${item.seriousInhalation}</div>
                  //         `
                  // }
                  if (item.ingestion != '') {
                        newHtml += `
                          <div class="categoriaQuimico"><b>Ingestion:</b> ${item.ingestion}</div>
                          `
                  }
                  // if (item.seriousIngestion != '') {
                  //       newHtml += `
                  //         <div>Serious Ingestion: ${item.seriousIngestion}</div>
                  //         `
                  // }

                newHtml += `
                <div></div>
                </li>`
              // algo asi:
              // addTodo(data[i]._id, data[i].description, data[i].completed)
              // no tienen que usar la funcion de addTodo, es un ejemplo

            $('#quimicos-list').append(newHtml)
              }
            });


            if (!found) {
              newHTML =
                `<li class="liQuimico">
                  <span class="titlesQuimicos">No results found</span>
                  <br>
                  </li>
                  `
                  $("#quimicos-list").append(newHTML);
            }
          },
          error: function(error_msg) {
            alert((error_msg['responseText']));
          }
        });

    });
