## Component Hierarchy

**SignUpContainer**
 - SignUpForm

**LogContainer**
  - LogInForm

**HomeContainer**
 - Home
  * AddBillBtn
  * SettleBillBtn
  * OutstandingBalances (ChildContainer)
  * AmountYouOwe (ChildContainer)
  * AmountYouAreOwed (ChildContainer)

**SideBarContainer**
  * Friends (list)  
  * AddFriends (form)  

**AddFriendContainer**
 - AddFriends (form)
  * SaveBtn
  * CancelBtn

**AddBillContainer**
 - AddBills (form)
  * ListOfParticipants
  * AddDescription
  * AddAmount
  * Payer
  * Calendar
  * AddNotes

**AddPayeeContainer**
 - ListOfParticipants

**DateWidget**
 - CalendarAPI
 - SaveBtn
 - CancelBtn

**CommentContainer**
- TextArea
- SaveBtn
- CancelBtn

**SettleBillContainer**
 - Amount
 - CalendarAPI
 - AddNotes
 - SaveBtn
 - Cancel


## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Root" |
| "/" | "LogInContainer" |
| "/users" | "SignUpContainer" |
| "/home" | "HomeContainer" |
| "/home" | "SideBarContainer" |
| "/bills/" | "AddBillContainer" |
| "/bills/friends" | "AddFriendContainer" |
| "/bills/:billId/owers" | "AddPayeeContainer" |
| "/bills/date" | "DateWidget" |
| "/bills/comments" | "CommentContainer" |
| "/bills/:billId/settle" | "SettleBillContainer" |
