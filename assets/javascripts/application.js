/* globals GOVUK */
function ShowHideContent(sb) {

	var self = this;

	self.escapeElementName = function(str) {

		return str.replace('[', '\\[').replace(']', '\\]');

	};

	self.showHideRadioToggledContent = function () {

		$('.block-label input[type="radio"]').each(function () {

			var $radio = $(this);
			var $radioGroupName = $radio.attr('name');
			var $radioLabel = $radio.parent('label');

			var dataTarget = $radioLabel.attr('data-target');

			var escapedName = self.escapeElementName($radioGroupName);
			var relatedInputs = '.block-label input[name=' + escapedName + ']';

			if (!dataTarget) {
				// If the data-target attribute is undefined for a radio button,
				// hide visible data-target content for radio buttons in the same group
				$radio.on('click', function() { hideAllRelated(); });
			} else {

				$radio.attr('aria-controls', dataTarget);

				$radio.on('click', function() {
					hideAllRelated();

					var $dataTarget = $('#' + dataTarget);
					$dataTarget.show();
					$dataTarget.find('input').each(function() {
						this.disabled = false;
						this.checked = false;
						// Eugh, sorry.
						// Wasn't sure whether to edit SelectionButtons, decided not to.
						// The `selected` state needs clearing when we disable
						// so that when we bring it back, it's clear.
						$(this).parent('label').removeClass(sb.selectedClass);
					});
					// Set aria-expanded and aria-hidden for clicked radio
					$radio.attr('aria-expanded', 'true');
					$dataTarget.attr('aria-hidden', 'false');
				});
			}

			function hideAllRelated() {
				$radio.closest('form').find(relatedInputs).each(function () {

					var $this = $(this);

					var groupDataTarget = $this.parent('label').attr('data-target');
					var $groupDataTarget = $('#' + groupDataTarget);

					// Hide toggled content
					$groupDataTarget.hide();
					// Disable and clear any inputs inside hidden section
					$groupDataTarget.find('input').each(function() {
						this.disabled = true;
					});
					// Set aria-expanded and aria-hidden for hidden content
					$this.attr('aria-expanded', 'false');
					$groupDataTarget.attr('aria-hidden', 'true');

				});
			}

		});

	};

	self.showHideCheckboxToggledContent = function () {

		$('.block-label input[type="checkbox"]').each(function() {

			var $checkbox = $(this);
			var $checkboxLabel = $(this).parent();

			var dataTarget = $checkboxLabel.attr('data-target');

			// Add ARIA attributes

			// If the data-target attribute is defined
			if (typeof dataTarget !== 'undefined' && dataTarget !== false) {

				// Set aria-controls
				$checkbox.attr('aria-controls', dataTarget);

				// Set aria-expanded and aria-hidden
				$checkbox.attr('aria-expanded', 'false');
				$('#' + dataTarget).attr('aria-hidden', 'true');

					// For checkboxes revealing hidden content
					$checkbox.on('click', function() {

						var state = $(this).attr('aria-expanded') === 'false' ? true : false;

						// Toggle hidden content
						$('#' + dataTarget).toggle();

						// Update aria-expanded and aria-hidden attributes
						$(this).attr('aria-expanded', state);
						$('#' + dataTarget).attr('aria-hidden', !state);
					});
			}

		});
	};

}

$(document).ready(function() {

	'use strict';

	// Use GOV.UK selection-buttons.js to set selected
	// and focused states for block labels
	var $blockLabels = $('.block-label input[type="radio"], .block-label input[type="checkbox"]');

	// eslint-disable-next-line no-new
	var sb = new GOVUK.SelectionButtons($blockLabels);

	// Show and hide toggled content
	// Where .block-label uses the data-target attribute
	var toggleContent = new ShowHideContent(sb);
	toggleContent.showHideRadioToggledContent();
	toggleContent.showHideCheckboxToggledContent();

});
