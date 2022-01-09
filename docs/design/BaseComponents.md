# NFT Marketplace Base Components

## Content
- Card
- Input
    - Text
    - Checkbox
    - Selectbox
- Button
- Accordion
    - Accordion Header
- Image

## :sparkles: Card
Card component similar div html element.
#### :grey_exclamation: Props
- width => Card width
- height => Card height
- child => Card content
- blurColor => Card radial blur color (default:rgba(48,118,234,0.2))
- onClick => Card onClick Funtion
#### :zap: Usage

- ##### :tada: Basic
    ```js 
    <Card width='250px' height='250px' /> 
    ```
    <img src="../images/base/card-basic-example.png?raw=true" />

- ##### :tada: Child
    ````js 
    <Card width="250px" height="250px"
       child={
         <div style={{width:"100%", height:"100%",display:"flex",flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
          <Button width='100px' height='50px' color={Colors.buttons.primary} textContent="Primary" />
          <Button width='100px' height='50px' color={Colors.buttons.secondary} textContent="Secondary" />
          <Button width='100px' height='50px' color={Colors.buttons.danger} textContent="Danger"/>
          <Button width='100px' height='50px' color={Colors.buttons.succes} textContent="Succes" />
         </div>
       }
    />
    ````
      

    <img src="../images/base/car-child-example.png?raw=true">

- ##### :tada: Blur Color
    ```js 
          <Card width='250px' height='250px' blurColor="rgba(78, 242, 154,0.3)"/>
    ```
    <img src="../images/base/card-blurColor-example.png?raw=true" />



## :sparkles: TextInput
Input for text or number values.

#### :grey_exclamation: Props

- width
- height
- placeholder (default: default input)
- icon => TextInput right icon or button
- type (text/number)
    
#### :zap: Usage
- ##### :tada: Basic
    ```js
          <TextInput width="250px" height="30px" />
    ```
    <img src="../images/base/textinput-basic-example.png?raw=true" />

- ##### :tada: Placeholder
  ```js
    <TextInput width="250px" height="30px"placeholder="Example Placeholder" />
  ```
  <img src="../images/base/textinput-placeholder-example.png?raw=true" />

- ##### :tada: Icon
  ```js
    <TextInput width="250px" height="30px" icon={<AiOutlineSearch size="28px" color="#32a852" />} />
  ```
  <img src="../images/base/textinput-icon-example.png?raw=true"/>


- ##### :tada: Type
  ```js
    <TextInput width="250px" height="30px" type="text" />
  ```
  <img src="../images/base/textinput-basic-example.png?raw=true" />

## :sparkles: Checkbox

#### :grey_exclamation: Props
- name
- onChange

#### :zap: Usage

- ##### :tada: Name
  ```js
   <Checkbox name="Checkbox Example" />
  ```
  <img src="../images/base/checkbox-name-example.png?raw=true" />

- ##### :tada: onChange
  ```js
    <Checkbox name="Checkbox Example" onChange={checkboxOnChange} />
  ```
  ```js
    const checkboxOnChange = () => {
        alert("checkbox is changed");
    };
  ```

## :sparkles: Select

#### :grey_exclamation: Props
- items
- onChange

#### :zap: Usage

- ##### :tada: Items
  ```js
  <Select items={["test1", "test2", "test3"]} />
  ```
  - Before
  <img src="../images/base/select-before-example.png?raw=true"/>

  - After
  <img src="../images/base/select-after-example.png?raw=true" />

  - Selected
  <img src="../images/base/select-after-select-example.png?raw=true" />

- ##### :tada: onChange
  ```js
    <Select
     items={["test1", "test2", "test3"]}
     onChange={selectBoxOnChange}
    />
  ```
  ```js
    const selectBoxOnChange = (v) => {
        alert(`Selectbox selected value ${v}`);
    };
  ```

## :sparkles: Button

#### :grey_exclamation: Props
- width
- height
- color
- onClick
- textColor => Hover Text Color
- textContent => Button Name

#### :zap: Usage

- ##### :tada: Basic
  ```js
  <Button width="150px" height="30px" textContent="Primary Button" />
  ```
  <img src="../images/base/button-basic-example.png?raw=true" />

- ##### :tada: Color
  ```js
  <Button
    width="150px"
    height="30px"
    textContent="Secondary Button"
    color={Colors.buttons.secondary}
  />
  ```
  <img src="../images/base/button-color-example.png?raw=true" />

- ##### :tada: textColor
  ```js
  <Button
    width="150px"
    height="30px"
    textContent="Danger Button"
    color={Colors.buttons.danger}
    textColor="blue"
  />
  ```
  <img src="../images/base/button-textColor-example.png?raw=true" />

- ##### :tada: onClick
  ```js
  <Button
    width="150px"
    height="30px"
    textContent="Danger Button"
    color={Colors.buttons.danger}
    onClick={()=>alert('Hello World')}
    textColor="blue"
  />
  ```


## :sparkles: Image


#### :grey_exclamation: Props
- width
- height
- src

#### :zap: Usage

- ##### :tada: Basic
  ```js
  <Image
    width="300px"
    height="300px"
    src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
  />
  ```

  <img src="../images/base/image-basic-example.png?raw=true" />


## :sparkles: Accordion
#### :grey_exclamation: Props
- child

#### :zap: Usage
- ##### :tada: Basic
  ```js
  <Accordion width="250px" height="40px" />
  ```
  <img src="../images/base/accordion-basic.png?raw=true">

- ##### :tada: Child
  ```js
  <Accordion
    width="250px"
    height="100px"
    child={
     <>
        <TextInput placeholder="min" />
        <TextInput placeholder="max" />
        <Button
            width="100%"
            height="40px"
            textContent="Submit"
            color={Colors.buttons.succes}
        />
    </>
    }
   />
  ```
  - After
  <img src="../images/base/accordion-basic.png?raw=true">

  - Before
  <img src="../images/base/accordion-child-example.png?raw=true" />
