describe('Tasks', () => {

    beforeEach(()=>{
        cy.visitHome();
    });

    afterEach(()=>{
        cy.wait(2000);
    })

    it('should add a new task', () => {
      
      const title = 'Sample task name';
      const description = 'Sample of task description';

      cy.get('.empty-list').should('be.visible');
      cy.get('.empty-list .title').should('contain','Nothing here');
      cy.get('.empty-list .description').should('contain','You can start adding a new task');

      cy.get('.toolbar button').click();
      cy.get('.card__header__title').should('contain','New Task');
      cy.get('#formNewTask #title').should('have.value','');
      cy.get('#formNewTask #title').type(title);
      cy.get('#formNewTask #description').should('have.value','');
      cy.get('#formNewTask #description').type(description);   
      cy.get('#btnSaveTask').click();
      
      cy.get('.side-panel').should('not.be.visible');

      cy.get('.card-task .title').should('contain',title);
      cy.get('.card-task p').should('contain',description);

    });

    it('should not add a new task with empty title', () => {
        cy.get('.toolbar button').click();
        cy.get('#btnSaveTask').click();
        cy.get('.side-panel').should('be.visible');
      });


      it('should close side panel when clicks on X button', () => {
        cy.get('.toolbar button').click({delay:2000});
        cy.get('.card__header__close').click({delay:2000});
        cy.get('.side-panel').should('not.be.visible');
      });

      it('should clear the form values when not click on save button', () => {
        cy.get('.toolbar button').click();
        cy.get('#formNewTask #title').type('Sample task name');
        cy.get('#formNewTask #description').type('Sample of task description');   
        cy.get('.card__header__close').click({delay:2000});

        cy.get('.toolbar button').click({delay:2000});
        cy.get('#formNewTask #title').should('have.value','');
        cy.get('#formNewTask #description').should('have.value','');
      });

      it('should mark a task as done', () => {
      
        const title = 'Sample task name';
        const description = 'Sample of task description';

        cy.get('.toolbar button').click();
        cy.get('#formNewTask #title').type(title);
        cy.get('#formNewTask #description').type(title);
        cy.get('#btnSaveTask').click();
        
        cy.get('.side-panel').should('not.be.visible');
  
        cy.get('.card-task .action').click({delay:2000});

        cy.get('.card-task .action.icon-finished').should('be.visible');
        cy.get('.card-task .action.icon-unfinished').should('not.be.visible');

        cy.get('.card-task p').should('have.css','font-style', 'italic');
        
      });

      it('should mark a task as not done', () => {
      
        const title = 'Sample task name';
        const description = 'Sample of task description';

        cy.get('.toolbar button').click();
        cy.get('#formNewTask #title').type(title);
        cy.get('#formNewTask #description').type(title);
        cy.get('#btnSaveTask').click({delay:2000});
        
        cy.get('.side-panel').should('not.be.visible');
  
        cy.get('.card-task .action').click({delay:2000});

        cy.get('.card-task .action').click({delay:2000});

        cy.get('.card-task p').should('not.have.css','font-style', 'italic');

        cy.get('.card-task .action.icon-unfinished').should('be.visible');
        cy.get('.card-task .action.icon-finished').should('not.be.visible');
        
      });

  })