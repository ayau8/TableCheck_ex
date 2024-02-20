# Task 2 

Task purpose: 
- Dynamically return the UI for party size
  - subject to whether group orders are involved (isGroupOrder in the menu list) in a given reservation, the number of min and max number of customer will alter 
  - If isGroupOrder is true, the min and max should follow the minOrderQty and maxOrderQty of the given menu, whereas when isGroupOrder is false, min and max should follow the respective shop configuration

Process / what I have completed:

Changes made to the below 3 files thus far:

- In PartySizeLists,
  FIRST TEST 
  - The conditionals to test for min & max totals across all age groups are included; based on the mock data (after revising the path based on spec.json file) from e2e, 
  the first test passed
  
  SECOND TEST
  - As Menulist is an array of object, I first tried looping through the array to find out if isGroupOrder is true in any object, if yes, the min and max for the given reservation should be updated through useState hook

- In spec.json, included an additional path to "/shops/{shop}/menu/item" targeting to capture the item within the menu array

- In e2e spec test
  - the mock's path for GET request are updated accordingly; there seems to be a mismatch previously (e.g. :id is used instead :shop that is stated in the spec.json file)
  - rearranged the order for menulist mock

Blockers:
- The Task 2(second test) couldn't pass as the subtract button will always be disabled once it hits the max number of allowed customers based on current codes


