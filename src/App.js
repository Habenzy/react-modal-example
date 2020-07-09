import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      modalDisplayed: false
    }
  }

  toggleModal = (evt) => {
    evt.preventDefault()

    this.setState((prevState) => {
      return { modalDisplayed: !prevState.modalDisplayed }
    })
  }


  render() {
    let modal

    if (this.state.modalDisplayed) {
      modal = <Modal close={this.toggleModal} />
    } else {
      modal = null
    }

    return (
      <div>
        <div id='content'>
          <button onClick={this.toggleModal}>Open Modal</button>
          {modal}
          {//This code does not require the if...else... conditional on lines 26-30
            //this.state.modalDisplayed ?
            //  <Modal close={this.toggleModal}/> :
            //  null
          }
          <p>
            Draught swing the lead come about maroon lad chantey hardtack. Ho yardarm hempen halter cutlass heave to avast Letter of Marque. Bilge Pieces of Eight belaying pin chandler nipper lass blow the man down. Admiral of the Black coffer driver Sail ho run a shot across the bow yard cackle fruit. Clipper scourge of the seven seas Jack Tar crack Jennys tea cup fire ship brigantine Nelsons folly. Yard knave hempen halter bucko Jack Ketch swab crow's nest. Long boat Letter of Marque yo-ho-ho jolly boat Sea Legs aft bowsprit. Jack Tar trysail quarterdeck Pieces of Eight square-rigged Buccaneer Admiral of the Black. Clipper rope's end Pirate Round line flogging chandler walk the plank.
          </p>
          <p>
            Strike colors interloper ballast Admiral of the Black loaded to the gunwalls smartly rope's end. Ye overhaul jury mast handsomely Gold Road chantey red ensign. Gold Road aye loaded to the gunwalls line lugsail bucko chase. Carouser pinnace hempen halter lugger furl reef gally. Loot salmagundi gibbet American Main scuttle Pieces of Eight nipperkin. Chandler fathom hornswaggle poop deck jury mast quarterdeck pirate. Hulk me keelhaul overhaul capstan code of conduct ahoy. Ye jib rum Blimey Sea Legs heave down smartly. Six pounders booty scuttle wench ahoy belay spanker.
          </p>
          <p>
            Gangplank rigging jack draft handsomely me bounty. Driver dance the hempen jig gunwalls hands pinnace log line. Grog blossom shrouds yawl Sail ho keelhaul pink Davy Jones' Locker. Lugger sloop hands fire in the hole code of conduct piracy grog. Spanish Main nipper crimp bucko salmagundi sheet Yellow Jack. Gold Road red ensign cog square-rigged jack matey reef sails. Quarterdeck spyglass yardarm log Chain Shot aye chase guns. Hogshead Cat o'nine tails overhaul bilge rat cutlass Blimey jib. Jack tender landlubber or just lubber gun Nelsons folly Jack Tar brigantine.
          </p>
          <p>
            Grog Arr Letter of Marque sloop hogshead bowsprit snow. Capstan Cat o'nine tails ballast splice the main brace grog blossom hardtack lass. Provost gally pinnace topmast bring a spring upon her cable pressgang jolly boat. Yardarm gabion crimp transom sutler Gold Road chandler. Cat o'nine tails long clothes avast doubloon booty prow Sea Legs. Barque red ensign matey long clothes yard rigging clipper. Spanish Main chase guns jack tack jury mast squiffy case shot. Heave to crack Jennys tea cup belay mutiny mizzen fire in the hole fathom. Shiver me timbers bilge water marooned hang the jib maroon square-rigged heave to.
          </p>
          <p>
            Sutler provost red ensign jolly boat doubloon bilge water topsail. Long boat tackle haul wind grog scallywag pinnace no prey, no pay. Loaded to the gunwalls booty barque lee reef run a rig brig. Carouser six pounders walk the plank lugger tack Sea Legs gunwalls. Careen Shiver me timbers spanker lugger yardarm grog blossom sloop. League squiffy cackle fruit splice the main brace lad to go on account scuttle. Boom mizzenmast topsail smartly hardtack bilged on her anchor log. Clipper avast code of conduct fire in the hole mutiny mizzen chandler. Avast gangway fire in the hole careen cutlass hang the jib jolly boat.
          </p>
          <p>
            Bilged on her anchor bucko interloper snow hearties lookout log. Buccaneer hornswaggle scallywag snow hearties black spot mutiny. Jack reef parley gabion gibbet galleon keelhaul. Topsail walk the plank cable Shiver me timbers galleon gangplank chase. Poop deck Blimey gangplank mizzen me lookout log. Sheet yardarm gangplank knave hardtack hands square-rigged. Rope's end lanyard crow's nest Corsair yo-ho-ho six pounders hornswaggle. Chantey pillage bilge water Sail ho stern lanyard coffer. Swab ho sutler pressgang keel wench strike colors.
          </p>
          <p>
            To go on account Sea Legs fore Arr fire ship Cat o'nine tails keelhaul. Scuttle keel brigantine Shiver me timbers broadside coxswain league. Interloper gabion cackle fruit Privateer execution dock red ensign handsomely. Overhaul furl American Main ye square-rigged swing the lead man-of-war. Sea Legs Blimey to go on account chantey mutiny avast Barbary Coast. Hail-shot square-rigged mutiny rope's end boatswain bucko bilge. Matey heave down yardarm Sail ho Arr long boat furl. Blow the man down cackle fruit Cat o'nine tails booty fluke scuttle holystone. Lookout grog Yellow Jack holystone wherry capstan hulk.
          </p>

        </div>

      </div>
    )
  }
}

function Modal(props) {


  return (
    <div id='modal-background'>
      <div id='modal'>
        Hello I'm a modal!
        <button onClick={props.close}>Close</button>
      </div>
    </div>
  )
}

export default App;
