define([
    'core/js/adapt',
    'core/js/views/componentView'
], function(Adapt, ComponentView) {

    var TextGraphicCombo = ComponentView.extend({

        preRender: function() {
            //  Checked is the Mobile Title field filled
            var textMobileTitle = this.model.get('textMobileTitle');
            if (textMobileTitle === "") {
                textMobileTitle = this.model.get('textAreaTitle');
                this.model.set('textMobileTitle', textMobileTitle);
            }

            this.checkIfResetOnRevisit();
        },

        postRender: function() {
            this.$('.text-graphic-widget').imageready(_.bind(function() {
                this.setReadyStatus();
                this.$('.component-widget').on('inview', _.bind(this.inview, this));
            }, this));
        },

        // Used to check if the graphic should reset on revisit
        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },

        inview: function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                if (visiblePartY === 'top') {
                    this._isVisibleTop = true;
                } else if (visiblePartY === 'bottom') {
                    this._isVisibleBottom = true;
                } else {
                    this._isVisibleTop = true;
                    this._isVisibleBottom = true;
                }

                if (this._isVisibleTop && this._isVisibleBottom) {
                    this.$('.component-widget').off('inview');
                    this.setCompletionStatus();
                }
            }
        },

        remove: function() {
          // Remove any 'inview' listener attached.
          this.$('.component-widget').off('inview');

          ComponentView.prototype.remove.apply(this, arguments);
        }
    });

    Adapt.register('textGraphicCombo', TextGraphicCombo);

    return TextGraphicCombo;

});
