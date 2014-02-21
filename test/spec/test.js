/* global describe, it */

(function () {
   'use strict';

   describe('iron chat app', function () {
      describe('', function () {
         it('should have an instance of the backbone collection MessagesCollection', function () {
         	expect(MessagesCollection !== undefined || null) .to.equal(true)
         });

         it('should have an instance of MessagesCollection messages', function () {
         	expect( messages !== undefined || null) .to.equal(true)
         });

         it('should have an instance of the object messageText', function () {
         	expect( messageText !== undefined || null) .to.equal(true)
         });

      });
   });
})();
