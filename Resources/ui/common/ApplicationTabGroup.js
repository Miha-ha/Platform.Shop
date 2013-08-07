function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var winCatalog = new Window(L('catalog')),
		winCart = new Window(L('cart')),
		winAccount = new Window(L('account')),
		winFavorites = new Window(L('favorites'));
	
	var tabCatalog = Ti.UI.createTab({
		title: L('catalog'),
		icon: '/images/KS_nav_ui.png',
		window: winCatalog
	});
	winCatalog.containingTab = tabCatalog;
	
	var tabFavorites = Ti.UI.createTab({
		title: L('favorites'),
		icon: '/images/KS_nav_views.png',
		window: winFavorites
	});
	winFavorites.containingTab = tabFavorites;
	
	var tabCart = Ti.UI.createTab({
		title: L('cart'),
		icon: '/images/KS_nav_views.png',
		window: winCart
	});
	winCart.containingTab = tabCart;
	
	var tabAccount = Ti.UI.createTab({
		title: L('account'),
		icon: '/images/KS_nav_views.png',
		window: winAccount
	});
	winAccount.containingTab = tabAccount;	
	
	self.addTab(tabCatalog);
	self.addTab(tabFavorites);
	self.addTab(tabCart);
	self.addTab(tabAccount);
	
	return self;
};

module.exports = ApplicationTabGroup;
