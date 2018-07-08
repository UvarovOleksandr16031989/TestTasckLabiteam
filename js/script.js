var data ={
    "posts": [
        {
            "name": "SEO Review and Reccomendations",
            "options": {
                "fixed": "Regular",
                "budget": 300,
                "delivery": "Urgent",
                "posted": "12 minutes ago",
                "ends": "14d, 23h",
                "proposals": 0
            },
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... ",
            "category": "Search Engine",
            "slils": {

                "name1": "net-framework",


                "name2": "рhp"
            },


            "client": {
                "country": "United states",
                "rating": 4.8
            }
        }
    ]
};

var i= 0;
while(i<4) {
    $(data.posts).each(function (index, item) {
        $('#clients_box').append(`
<div class="clients_box " >
    <h3 class="clients_box__title">${item.name}</h3>
    <div class="clients_box__header">
        <span class="clients_box__header__content">
            ${'Fixed:'}
        </span>
        <span class="clients_box__header__content--bold">
            ${item.options.fixed}
        </span>
        <span class="clients_box__header__content">
            ${'Budget:$'}
        </span>
        <span class="clients_box__header__content--bold">
            ${item.options.budget}
        </span>
        <span class="clients_box__header__content">
            ${'Delivery:'}
        </span>
        <span class="clients_box__header__content--bold">
            ${item.options.delivery}
        </span>
        <span class="clients_box__header__content">
            ${'Posted: '}
        </span>
        <span class="clients_box__header__content--bold">
            ${item.options.posted}
        </span>
        <span class="clients_box__header__content">
            ${'Ends: '}
        </span>
        <span class="clients_box__header__content--bold">
            ${item.options.ends}
        </span>
        <span class=" clients_box__header__content--blue">
            ${item.options.proposals} ${'Proposals'}
        </span>  
    </div>
    <div class="clients_box__content">
        <p class="clients_box__content__item">
        ${item.description}
        <label for="cheked"class="clients_box__content__item__label">
            <span class=" clients_box__content__item__label__content">
                more
            </span>
        </label>
        <input type="checkbox"id="cheked"  class="clients_box__content__item__label__iput">
        <span class=" clients_box__content__more">
            Excepteur sint occaecat cupidatat no
        </span>
        </p>
    </div>
    <div class="clients_box__bottom">
        <span class="clients_box__bottom__category">
        ${'Category:'}
        </span>
        <span class="clients_box__bottom__category_item">
        ${item.category}
        </span>
        <span class="clients_box__bottom__skills">
        ${'Skills:'}
        </span>
        <span class="clients_box__bottom__skills_item">
        ${item.slils.name1}
        </span> 
        <span class="clients_box__bottom__skills_item">
        ${item.slils.name2}
        </span>
        <span class="clients_box__bottom__skills_item">
        ${'google-maps-api'}
        </span>
        <span class=" clients_box__bottom__skills_item--blue">
        ${'18 more'}
        </span>
    </div>
    <div class="clients_box__rating">
        <span class="clients_box__rating__client">
            ${'Client:'}
        </span>
        <span class="clients_box__rating__client__rating">
            ${item.client.country}  
        </span>
        <span class="clients_box__rating__client__rating__assessment">
            ${item.client.rating}
        </span>
        <span class="clients_box__rating__client__stars--yellow">
             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="13" viewBox="0 0 14 13"><g><g transform="translate(-464 -760)"><image width="14" height="13" transform="translate(464 760)" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAABjUlEQVQoU42SzysEYRjHv8/uDBt2oyiWVonIHETj5ES4cPXjRIqjG+UPQDm4yFGuiv/AwcGFZF22keIkYdHGxi525n08M9OqtVaempm353k+7/v9Pu8QSgSfRmNgDMG83SaS1Y+gP8B5gDcAaibz9vpfIFt1VchqZ9LcJuC6gAu/gnzZWo5Utgr0qUPTmqB4SgA50YtHOXkRTvAInHtBRegTF9dpT6r46ZH3jiwb5aksIV9J/g2EfWhqmngXQbREa8T+JIhXpRgu5VvycUDNkJlM+GBHLAKlKuDYw2BakYaGIphxCC04S903l27Nl8ryjddEEAhVi79NSY8Wn0pzMqQtt9e9noLr4LPaKJR+IFB7MchrZN4v5fOF4El9LwJ0IsWk+N3zPdG4+B8QTcdI3w1SP+xvqfldOB6dEOEj0rQFTU94vm0VFrAPpLqg8zJ1JR8KQLaMMnykZCicwdV9CmPSfm5oeH0OQ3cCyNjv6Ht6E3/utfjD8QbkTtcwgui0cj//TW9Ty3JEtJPv/wIaJ42sn6fkTwAAAABJRU5ErkJggg=="/></g></g></svg>
        </span>
        <span class="clients_box__rating__client__stars">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="71" height="13" viewBox="0 0 71 13"><g><g transform="translate(-465 -529)"><image width="71" height="13" transform="translate(465 529)" xlink:href="data:image/png;base64,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"/></g></g></svg>
        </span>
        
    </div>
</div>`);
    });
    i++;

};

