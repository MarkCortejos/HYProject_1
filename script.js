// =========================== Base App Object Begins =====================================
const invQuestApp = {
	// base stats when no items equipped
	baseAtk: 100,
	baseDef: 100,

	// function to search for item name and extract attack value
	modifyAtk: function (itemName) {
		for (let i = 0; i < items.length; i++) {
		let itemAtk;
			if (items[i].id === itemName) {
				itemAtk = items[i].atk;
				return itemAtk
			};
		};
	},
	
	// function to search for item name and extract defense value
	modifyDef: function (itemName) {
		for (let i = 0; i < items.length; i++) {
		let itemDef;
			if (items[i].id === itemName) {
				itemDef = items[i].def;
				return itemDef
			}; 
		};
	}
};
// =========================== Base App Object Ends =====================================

//=================================== Items Array Begins =====================================
const items = [	
	{ // sword item
		id: "sword",
		atk: 50	
	},
	
	{ // shield item
		id: "shield",
		def: 50
	},	
];
//=================================== Items Array Ends =====================================


// ============================== Doc Ready Begins ===============================
$(function() {	
	$('div.container').on('click', '.sword', function() {						// item is clicked
		let currentAtk 															// prepare the current attack variable
		if ($('.sword').hasClass('equipped') !== true) { 						// if the item is not yet equipped, do the following
			currentAtk = invQuestApp.baseAtk + invQuestApp.modifyAtk('sword'); 	// update the attack value
			$('.sword').addClass('hidden'); 									// hide the clicked item
			$('.handSlot').first().toggleClass('handSlot sword equipped'); 		// show the equipped item in a hand slot
		} else if ($('.sword').hasClass('equipped') === true) { 				// if the item is equipped
			currentAtk = invQuestApp.baseAtk;									// return the attack value to base	
			$('.sword.equipped').toggleClass('handSlot sword equipped')			// unequip the item and return the hand slot back
			$('.sword').removeClass('hidden')									// show the item back in the inventory
		};
		$('span.currentAttack').text(currentAtk);								// output the current attack value to the stat block
	}),

	$('div.container').on('click', '.shield', function() {
		let currentDef
		if ($('.shield').hasClass('equipped') !== true) {
			currentDef = invQuestApp.baseDef + invQuestApp.modifyDef('shield');
			$('.shield').addClass('hidden')
			$('.handSlot').first().toggleClass('handSlot shield equipped')
		} else if ($('.shield').hasClass('equipped') === true) {
			currentDef = invQuestApp.baseDef;
			$('.shield.equipped').toggleClass('handSlot shield equipped')
			$('.shield').removeClass('hidden')
		};
		$('span.currentDefense').text(currentDef);

	})
}); 
// ================================= Doc Ready Ends ===================================


