describe('Swiper Gallery Test', function () {
    it('Checks if second slide contains "United Kingdom"', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
    });
});

describe('Swiper Gallery Test', function () {
    it('Checks if third slide contains "Paris"', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
        cy.get('.swiper-button-next').click({force: true});
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Paris');
    });
});

describe('Swiper Gallery Pagination Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.wait(1000);
    })

    it('should have three pagination bullets', () => {
        cy.get('.swiper-pagination-bullet').should('have.length', 3);
    });

    it('should navigate to correct slide when clicking pagination bullet', () => {
        clickNextButton();
        validateActiveSlide('London');

        clickNextButton();
        validateActiveSlide('Paris');

        clickNextButton();
        validateActiveSlide('Rome');
    });
});

const validateActiveSlide = (expectedValue) => {
    cy.get('.swiper-slide-active').should('contain', expectedValue);
}

const clickNextButton = () => {
    cy.get('.swiper-button-next').click({force: true});
    cy.wait(500);
}
