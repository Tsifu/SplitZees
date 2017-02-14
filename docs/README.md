# SplitZees

[Heroku link][heroku] **Note:** This should be a link to your production site

[SplitWise link][splitwise]

[heroku]: https://splitzees.herokuapp.com/#/
[splitwise]: https://secure.splitwise.com/

## Minimum Viable Product

SplitZees is a web application inspired by SplitWise built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Add Friends
- [ ] Add bills and categorize payer and payees amongst you and your friends
- [ ] Show outstanding balances by friends and total amount you owe or they owe you
- [ ] Settle bill
- [ ] See individual bill detail show page
- [ ] Production README [sample](/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ../docs/wireframes
[components]: ../docs/components-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ../docs/api-endpoints.md
[schema]: ../docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: AddFriends, API, and components (2 days)

**Objective:** Ability to add friends and render list of friends

### Phase 3: Bill (2 days)

**Objective:** Add bills, split between friends and render transaction on the homepage

### Phase 4: Bill's child components (1 day)

**Objective:** Add Date, Comments components

### Phase 5: SettleBill (1 day, W2 Th 6pm)

**Objective:** Add Component and update server

### Phase 6: - Click into Friends, fine tune CSS and animations (1 day, W2 F 6pm)

**Objective:** Ability to see bill details by friends

### Bonus Features (TBD)
- [ ] Add Friends directly on the homepage
- [ ] Send reminder emails to owers
- [ ] Show total outstanding balances by friend on the right sidebar
- [ ] Delete bills and allow different settlement methods
