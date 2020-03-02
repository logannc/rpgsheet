describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'RPG Sheet')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /dnd5e', () => {
		cy.get('nav a').contains('5e').click();
		cy.url().should('include', '/dnd5e');
	});
});