function personagens() {
    return `
        ${navbar()}
      <div class="row" >
        <div class="card" style="width: 18rem;" id="c0">
          <img id="i0" class="card-img-top img-thumbnail" src="" alt="Card image cap" >
          <div class="card-body">
            <h5 class="card-title" id="n0" >Card title</h5>
            <h5 class="card-title" id="cod0" >Card title</h5>
            <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>
      
    
        <div class="card" style="width: 18rem;" id="c1">
          <img id="i1" class="card-img-top img-thumbnail" src="" alt="Card image cap">
          <div class="card-body">
            <h5 id="n1" class="card-title">Card title</h5>
            <h5 class="card-title" id="cod1" >Card title</h5>
            <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>

        <div class="card" style="width: 18rem;" id="c2">
          <img id="i2" class="card-img-top img-thumbnail" src="" alt="Card image cap">
          <div class="card-body">
            <h5 id="n2" class="card-title">Card title</h5>
            <h5 class="card-title" id="cod2" >Card title</h5>
            <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card" style="width: 18rem;" id="c3">
          <img id="i3" class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
            <h5 id="n3" class="card-title">Card title</h5>
            <h5 class="card-title" id="cod3" >Card title</h5>
            <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>

        <div class="card" style="width: 18rem;" id="c4">
          <img id="i4" class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
            <h5 id="n4" class="card-title">Card title</h5>
            <h5 class="card-title" id="cod4" >Card title</h5>
            <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>

        <div class="card" style="width: 18rem;" id="c5">
          <img id="i5" class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
            <h5 id="n5" class="card-title">Card title</h5>
            <h5 class="card-title" id="cod5" >Card title</h5>
            <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card" style="width: 18rem;" id="c6">
          <img id="i6" class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
            <h5 id="n6" class="card-title">Card title</h5>
            <h5 class="card-title" id="cod6" >Card title</h5>
            <a href="#"  onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;" id="c7">
          <img id="i7" class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
            <h5 id="n7" class="card-title">Card title</h5>
            <h5 class="card-title" id="cod7" >Card title</h5>
            <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>
        <div class="card" style="width: 18rem;" id="c8">
          <img id="i8" class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
            <h5 id="n8" class="card-title">Card title</h5>
            <h5 class="card-title" id="cod8" >Card title</h5>
            <a href="#" onclick="showHistorys(this)" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Stories</a>
          </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Stories</h5>
              </div>
              <div class="modal-body">
                <div class="list-group" id="historys">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" onclick="clear()" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    <span id="data" style="visibility: hidden">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="../md5.min.js"></script>
    <script src="../parseData.js"></script>
    <script src="../requests.js"> </script>
    <script>
      getCharacterList();
    </script>
        ${footer()}
    `
  }