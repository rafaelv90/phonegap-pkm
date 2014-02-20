/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        this.onDeviceReady();
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        String.prototype.lpad = function(padString, length) {
            var str = this;
            while (str.length < length)
                str = padString + str;
            return str;
        }

        // Ligas Pokémon
        // 001 - 151  / Kanto
        // 152 - 251  / Johto
        // 252 - 386  / Hoenn
        // 387 - 493  / Sinnoh
        // 494 - 649  / Unova
        // 650 - 718  / Kahlos
        var maxNumber = 649;

        var pokemonNumber = (1 + Math.floor(Math.random() * maxNumber)).toString();
        var img = new Image();
        
        img.width = 119;
        img.id = 'imagem';
        img.crossOrigin = "Anonymous";
        
        // Local
        img.src = 'img/pokemons/'+pokemonNumber.lpad("0", 3)+'.png';

        // Pokémon CDN
        //http://assets10.pokemon.com/static2/_ui/img/pokedex/full/002.png
        //var pokemonCdn = (1 + Math.floor(Math.random() * 20)).toString();
        
        //img.crossOrigin = '';
        //img.src = 'http://assets'+pokemonCdn+'.pokemon.com/static2/_ui/img/pokedex/full/'+pokemonNumber.lpad("0", 3)+'.png';

        this.hideImage(img);
    },

    hideImage: function(img) {
        Pixastic.process(img, "brightness", {brightness:-150} , function(processedImage) {
            $('#pokemon').html(processedImage);
        });        
    },

    showImage: function() {
        Pixastic.revert($('#pokemon #imagem').get(0));
    },

    showNextButton: function() {
        $('#next').show();
        $('#next').on('click', function(){
            location.reload();
        });
    },
};


$(function() {
  $('#reveal').on('click', function(){
    $(this).hide();
    app.showImage();
    app.showNextButton();
  });
});
