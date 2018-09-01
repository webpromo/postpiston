
describe('can test the site', () => {
    it('can paste in copy', () => {
      cy.visit('http://localhost:3000');
    });
   
    it('.click() - click on a DOM element', () => {
        // https://on.cypress.io/click
        cy.get('#login').click();
        cy.wait(500);
        cy.get('button').click();

   })
   var myValue = 'DevMountain is an industry-leading coding school that began in the heart of the Wasatch Mountains. Founded by fellow coders, DevMountain\'s expert faculty are passionate about sharing their craft and empowering the next wave of programmers, entrepreneurs and designers\n\
   Through our full-time (Immersive) or part-time ("After Hours") coding bootcamps, we are accelerating education by focusing on modern technical skills for today\'s fast-paced high-tech industries. We offer a variety of courses taught by industry professionals with years of real-world experience, from web development and user experience (UX) design to iOS development\n\
   Our high impact, hands-on, project-based curriculum allows our alumni to build foundations to launch their careers, build their startups and achieve their goals. We infuse a passion for development and design into our community. DevMountain started in 2013 initially in Provo, Utah but has quickly grown to four campuses with six-course offerings, DevMountain is the largest coding/technology school in the Intermountain West, and one of the highest rated coding schools in the country.'

   it('can receive pasted text', () => {
      cy
        .get('textarea')
        .invoke('val', myValue).trigger('change')
    })

    it('Save article', () => {
        cy.get('#Save').click();
        cy.wait(500);
    })
})