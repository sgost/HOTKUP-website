import styled from "styled-components"

export const ContactSection = styled.div`
.contact {
    padding: 2vw 0 3vw 0;
    background: white;
  }
  .contact h1 {
    font-style: normal;
    font-weight: 800;
    font-size: 2.87769784172662vw;
    line-height: 3.9568345323741vw;
    text-align: center;
    color: #200E32;
  }
  .contact_contrainer {
    max-width: calc(100% - 15.2%);
    margin: auto;
    display: flex;
    margin-top: 3.251799vw;
    border-radius: 1.15107913669065vw 0px 0px 1.15107913669065vw;
  }
  .contact_contrainer #contact_img_block_top p {
    font-style: normal;
    font-weight: bold;
    font-size: 2.01438848920863vw;
    line-height: 2.73381294964029vw;
    color: #ffffff;
  }
  .contact_contrainer #contact_img_block_top p:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 1.00719424460432vw;
    line-height: 1.58273381294964vw;
    color: #ffffff;
    opacity: 0.7;
    width: 21.726618705036vw;
  }
  .contact_img_block {
    width: 35%;
    background: #02042B;
    border-top-left-radius: 1.15107913669065vw;
    border-bottom-left-radius: 1.15107913669065vw;
    padding: 4.24460431654676vw 2.94964028776978vw;
  }
  #contact_img_block_bottom {
    margin-top: 3.59712230215827vw;
  }
  #contact_img_block_bottom_blocks {
    display: flex;
    margin-top: 3.16546762589928vw;
  }
  #contact_img_block_bottom_blocks:last-child {
    margin-top: 0.5vw;
  }
  #contact_img_block_bottom_blocks img {
    width: 1.2vw;
    height: 1.2vw;
    margin-top: 0.575539568345324vw;
  }
  #contact_img_block_bottom_blocks_b1 p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.00719424460432vw;
    line-height: 2.30215827338129vw;
    color: #ffffff;
    opacity: 0.8;
    display: flex;
    margin-left: 1.00719424460432vw;
  }
  #contact_img_block_bottom_blocks2 {
    width: 15.5395683453237vw;
    height: 11.9424460431655vw;
    border-radius: 1.15107913669065vw;
    margin-top: 3.81294964028777vw;
  }
  #contact .contact_contrainer #location_matter {
    width: 16.9784172661871vw;
  }
  .contact_info_block {
    width: 65%;
    background: rgba(255, 255, 255, 1);
    padding: 3.7410071942446vw 3.09352517985611vw;
    display: flex;
    flex-direction: column;
    border-top-right-radius: 1.15107913669065vw;
    border-bottom-right-radius: 1.15107913669065vw;
    box-shadow: 0px 0px 2.15827338129496vw rgba(23, 23, 99, 0.16);
  }
  .contact_info_top {
    display: grid;
    grid-template-columns: auto auto;
    gap: 4.60431654676259vw;
  }
  .contact_info_top:nth-child(2) {
    margin-top: 3vw;
  }
  .contact_name {
    display: flex;
    flex-direction: column;
  }
  .contact_info_block span {
    font-style: normal;
    font-weight: 500;
    font-size: 0.863309352517986vw;
    line-height: 1.15107913669065vw;
    color: #200e32;
    opacity: 0.8;
  }
  .contact_info_block input {
    font-style: normal;
    font-weight: 500;
    font-size: 1.15107913669065vw;
    line-height: 1.58273381294964vw;
    color: #000000;
    background: transparent;
    outline: none;
  }
  .contact_name input {
    height: 3.45323741007194vw;
    font-style: normal;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.8);
    border: none;
    border-bottom: 0.0719424460431655vw solid #200e32;
    padding-left: 0.719424460431655vw;
    background: transparent;
  }
  .contact_message2 {
    display: flex;
    flex-direction: column;
    margin: 2vw 0;
    position: relative;
    transition: 0.5s ease-in-out;
  }
  .contact_message2 .icon {
    color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 50%;
    right: 2vw;
  }
  .contact_message2 input {
    height: 3.45323741007194vw;
    font-style: normal;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.8);
    border: none;
    border-bottom: 0.0719424460431655vw solid #200e32;
    padding-left: 0.719424460431655vw;
    background: transparent;
  }
  .contact_message2 #select {
    position: absolute;
    width: 100%;
    height: fit-content;
    background:white;
    z-index: 1;
    border-bottom-left-radius: 1vw;
    border-bottom-right-radius: 1vw;
    top: 100%;
    transition: 0.5s ease-in-out;
    overflow: hidden;
    box-shadow: 0px 0px 2.15827338129496vw rgba(23, 23, 99, 0.16);
    padding: 1vw 0;
  }
  .contact_message2 #select p {
    cursor: pointer;
    color: #200e32;
    font-weight: 500;
    padding: 0.5vw 1vw;
    transition: 0.5s ease-in-out;
    font-size: 1vw;
  }
  .contact_message2 #select p:hover {
    padding: 0.5vw 1vw;
    background: #2d307b;
    transition: 0.5s ease-in-out;
    color: #ffffff;
    font-weight: bold;
  }
  .contact_message {
    display: flex;
    flex-direction: column;
    margin-top: 3vw;
  }
  .contact_message textarea {
    width: 100%;
    border: none;
    border-bottom: 0.0719424460431655vw solid #200e32;
    outline: none;
    padding: 0.215827338129496vw 0.719424460431655vw 1.07913669064748vw
      0.719424460431655vw;
    resize: none;
    font-size: 1.15107913669065vw;
    outline: none;
    margin-top: 0.431654676258993vw;
    background: transparent;
  }
  .button {
    text-align: right;
    margin-top: 4vw;
  }
  .contact_info_block .button button {
    font-style: normal;
    font-weight: bold;
    font-size: 1.15107913669065vw;
    color: #ffffff;
    border: none;
    width: 20.2877697841727vw;
    height: 3.30935251798561vw;
    background: #2790F9;
    border-radius: 0.575539568345324vw;
    cursor: pointer;
  }
  @media (max-width: 750px) {
    .contact {
      padding: 15vw 0 14vw 0;
      background: white;
    }
    .contact_img_block {
      display: none;
    }
    .contact_info_top {
      display: grid;
      grid-template-columns: auto;
      gap: 8vw;
    }
    .contact_info_top:nth-child(2) {
      margin-top: 8vw;
    }
    .contact_info_block {
      width: 90%;
      background: transparent;
      padding: 0;
      display: flex;
      flex-direction: column;
      border-top-right-radius: 2.2vw;
      border-bottom-right-radius: 2.2vw;
      border-top-left-radius: 2.2vw;
      border-bottom-left-radius: 2.2vw;
      box-shadow: unset;
      margin: auto;
    }
    .contact_contrainer {
      max-width: calc(100% - 8%);
      margin-top: 10vw;
    }
    .contact_info_block span {
      font-size: 3.3vw;
    }
    .contact_name input {
      height: 13vw;
      font-style: normal;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.8);
      border: none;
      border-bottom: 0.0719424460431655vw solid #200e32;
      padding-left: 1vw;
      font-size: 3.9vw;
      padding-top: 3vw;
    }
    .contact_message2 {
      margin: 5vw 0;
    }
    .contact_message2 input {
      height: 13vw;
      font-style: normal;
      font-weight: normal;
      color: rgba(0, 0, 0, 0.8);
      border: none;
      border-bottom: 0.0719424460431655vw solid #200e32;
      padding-left: 1vw;
      font-size: 4vw;
      padding-top: 3vw;
    }
    .contact_message textarea {
      width: 100%;
      height: 15vw;
      border: none;
      border-bottom: 0.0719424460431655vw solid #200e32;
      outline: none;
      padding: 0 0.719424460431655vw 1.07913669064748vw 0.719424460431655vw;
      font-size: 3.9vw;
      margin-top: 9.5vw;
    }
    .contact_message span {
      position: relative;
      top: 5vw;
    }
    .contact_info_block .button button {
      font-size: 2.9vw;
      width: 60vw;
      height: 10vw;
      border-radius: 1.5vw;
    }
    .button {
      text-align: center;
      margin-top: 16vw;
    }
    .contact h1 {
      font-size: 6.04651162790698vw;
      line-height: inherit;
    }
    .contact_message2 #select p {
      font-size: 3vw;
      padding: 2vw;
    }
    .contact_message2 #select p:hover {
      font-size: 3vw;
      padding: 2vw;
    }
  }
`
