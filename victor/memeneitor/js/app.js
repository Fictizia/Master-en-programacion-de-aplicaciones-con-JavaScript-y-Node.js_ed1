var app = {
    canvas:null,
    image:null,
    /* Víctor: dos nuevos parámetros incluidos */
    imagePreview:null,
    btnCreate: document.querySelector('.create'),
    /* End Víctor */
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
        /* Víctor: argumento de image cambiado por imagePreview */
        createImage: function (imagePreview, textAbove, textBelow, properties) {
            var canvas = document.createElement('canvas'),
            context = canvas.getContext('2d');

            imagePreview.width > 0 ? canvas.width = imagePreview.width : canvas.width = 300
            imagePreview.height > 0 ? canvas.height = imagePreview.height : canvas.height = 300

            context.drawImage(imagePreview, 0, 0);
            context.font = properties.textSize +'px helvetica';
            context.fillStyle = properties.textColor;
            context.textAlign = 'center';
            context.textBaseline = 'hanging';

            if (textAbove) {
                context.fillText(textAbove, canvas.width/2, properties.textPadding);
            }
            if (textBelow) {
                context.fillText(textBelow, canvas.width/2, canvas.height - properties.textSize - properties.textPadding);
            }

            return canvas.toDataURL(properties.imageFormat);
        },

        create: function () {
            /* Víctor: He añadido imagePreview y colorText para cambiar el color del texto */
            var image = document.querySelector('#image'),
            imagePreview = document.querySelector('.preview-image'),
            textAbove = document.querySelector('.preview-text-top-input').value,
            textBelow = document.querySelector('.preview-text-bottom-input').value,
            colorText = document.querySelector('.preview-text-color-input').value,
            properties = {
                textSize: 50,
                textColor: colorText,
                textPadding: 10,
                imageFormat: 'image/png'
            };

            /* Víctor: Como la función createImage nos devuelve la imagen en base64 pues lo cogemos y seteamos el src de la imagen final a la imagen final */
            var dataUrlImage = app.tools.createImage(imagePreview, textAbove, textBelow, properties);
            if(image) {
                image.src = dataUrlImage;
            } else {
                document.querySelector('.img-container').innerHTML = '<img id="image" src="' + dataUrlImage + '" />';
            }
        },

        /* Victor: Funcionalidad para la preview de la imagen */
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
        previewTextEvent: function(input, span) {
            input.addEventListener("keyup", function() {
                span.innerText = this.value;
            });
        },
        previewTextColorEvent: function(input, textTop, textBottom) {
            input.addEventListener("change", function() {
                textTop.style.color = this.value;
                textBottom.style.color = this.value;
            });
        }
        /* End Victor */
    },
};

(function () {
    app.tools.previewImage();
    app.btnCreate.addEventListener('click',app.tools.create, true);
})();
