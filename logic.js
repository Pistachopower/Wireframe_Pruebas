// logic.js
        function setView(view) {
            const body = document.body;
            const buttons = document.querySelectorAll('.view-toggle button');
            
            if (view === 'mobile') {
                body.className = 'mobile-view';
                buttons[0].classList.add('active');
                buttons[1].classList.remove('active');
            } else {
                body.className = 'desktop-view';
                buttons[0].classList.remove('active');
                buttons[1].classList.add('active');
            }
        }

        function toggleFaq(button) {
            const faqItem = button.parentElement;
            const allFaqItems = document.querySelectorAll('.faq-item');
            
            allFaqItems.forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            faqItem.classList.toggle('active');
        }
