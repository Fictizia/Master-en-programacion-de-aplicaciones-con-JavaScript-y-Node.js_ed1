var app = {
    canvas:null,
    image:null,
    imagePreview:null,
    btnCreate: document.querySelector('.create'),
    tools:{
        /**
        * This method create a new image with texts, using the html5 canvas.
        * @param {htmlTag} image - The image to transform.
        * @param {htmlTag} imagePreview - The preview of the image to transform.
        * @param {string} textAbove - The text above of the image.
        * @param {string} textBelow - The text below of the image.
        * @param {object} properties - Set of properties for the texts and image.
        * @param {number} properties.textSize - The font size for both texts
        * @param {string} properties.textColor - The color (hex format) for both texts
        * @param {number} properties.textPadding - Padding top for the text above et padding bottom fot the text below
        * @param {string} properties.imageFormat - Format to image. ex. 'image/png'
        * @returns {string} Return a Base64 DataURI string of the new image
        */
        createImage: function (imagePreview, textAbove, textBelow, properties) {
            var canvas = document.createElement('canvas'),
            context = canvas.getContext('2d');

            imagePreview.width > 0 ? canvas.width = imagePreview.width : canvas.width = 300
            imagePreview.height > 0 ? canvas.height = imagePreview.height : canvas.height = 300

            context.drawImage(imagePreview, 0, 0);
            
            if (textAbove) {
                app.tools.drawStroked(context, textAbove, canvas.width / 2, properties.textPadding, properties);
            }
            if (textBelow) {
                app.tools.drawStroked(context, textBelow, canvas.width / 2, canvas.height - properties.textSize - (properties.textPadding / 2), properties);
            }

            return canvas.toDataURL(properties.imageFormat);
        },

        create: function () {
            var image = document.querySelector('#image'),
            imagePreview = document.querySelector('.preview-image'),
            downloadLink = document.querySelector('#download'),
            textAbove = document.querySelector('.preview-text-top-input').value,
            textBelow = document.querySelector('.preview-text-bottom-input').value,
            colorText = document.querySelector('.preview-text-color-input').value,
            properties = {
                textSize: 50,
                textColor: colorText,
                textPadding: 20,
                imageFormat: 'image/png'
            };

            var dataUrlImage = app.tools.createImage(imagePreview, textAbove.toUpperCase(), textBelow.toUpperCase(), properties);
            if(image) {
                image.src = dataUrlImage;
            } else {
                document.querySelector('.img-container').innerHTML = "";
                document.querySelector('.img-container').innerHTML = '<img id="image" src="' + dataUrlImage + '" />';
            }
            
            if(downloadLink) {
                downloadLink.download = dataUrlImage;
            } else {
                document.querySelector('.img-container').innerHTML += '<a id="download" download="meme.png" href="' + dataUrlImage + '" target="_blank">Descargar</a>';
            }
            
            
        },
        /**
         * @description: get every elements which take part in the preview of the meme and add them all actions.
         */
        previewImage: function() {
            var img = document.querySelector('.preview-image');
            var topPreviewTextInput = document.querySelector('.preview-text-top-input');
            var topPreviewText = document.querySelector('.preview-text-top');
            var bottomPreviewTextInput = document.querySelector('.preview-text-bottom-input');
            var bottomPreviewText = document.querySelector('.preview-text-bottom');
            var previewTextColorInput = document.querySelector('.preview-text-color-input');

            app.tools.previewTextEvent(topPreviewTextInput, topPreviewText);
            app.tools.previewTextEvent(bottomPreviewTextInput, bottomPreviewText);
            app.tools.previewTextColorEvent(previewTextColorInput, topPreviewText, bottomPreviewText);
        },
        /**
         * @description: text written on input is shown in the preview.
         * @param {object} input - input type text where users write their own text.
         * @param {object} span - span where text is shown in the preview.
         */
        previewTextEvent: function(input, span) {
            input.addEventListener("keyup", function() {
                span.innerText = this.value.toUpperCase();
            });
        },
        /**
         * @description: if user change text color on input we get it and we give the color choosed to text.
         * @param {object} input - input type color where we get the color.
         * @param {object} textTop - text placed on top of the preview.
         * @param {object} textBottom - text placed on bottom of the preview.
         */
        previewTextColorEvent: function(input, textTop, textBottom) {
            input.addEventListener("change", function() {
                textTop.style.color = this.value;
                textBottom.style.color = this.value;
            });
        },
        /**
         * @description: here we apply styles over text for the final meme.
         * @param {object} ctx - context (canvas).
         * @param {string} text - text of the meme.
         * @param {int} x - horizontal text position.
         * @param {int} y - vertical text position.
         * @param {object} properties - properties for the texts.
         */
        drawStroked: function(ctx, text, x, y, properties) {
            ctx.font = properties.textSize +'px impact';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'hanging';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 8;
            ctx.lineJoin="miter";
            ctx.miterLimit=2;
            ctx.strokeText(text, x, y);
            ctx.fillStyle = properties.textColor;
            ctx.fillText(text, x, y);
        }
    },
};

(function () {
    app.tools.previewImage();
    app.btnCreate.addEventListener('click',app.tools.create, true);
})();
