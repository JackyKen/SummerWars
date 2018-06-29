pragma solidity ^0.4.19;

import "../address_array.sol";


/// @title WorldInfo
/// @author ["Cryptape Technologies <contact@cryptape.com>"]
contract WorldInfo {
    
    address[] public scenes;
    mapping (address => address[]) private users;

    /// Save register's address
    function WorldInfo() public {}

    /// @notice Add scene
    function addScene(address _scene)
        public
        returns (bool)
    {
        if (!AddressArray.exist(_scene, scenes))
            scenes.push(_scene);
        return true;
    }

    /// @notice Delete scene
    function deleteScene(address _scene)
        public
        returns (bool)
    {
        AddressArray.remove(_scene, scenes);  
        return true;
    }
    
    /// @notice User enter
    function userEnter(address _scene, address _user)
        public
        returns (bool)
    {
        if (!AddressArray.exist(_user, users[_scene]))
            users[_scene].push(_user);
        return true;
    }

    /// @notice User leave
    function userLeave(address _scene, address _user)
        public
        returns (bool)
    {
        AddressArray.remove(_user, users[_scene]);  
        return true;
    }

    // function set_name(string _name) public returns (bool) {}

    function getUsers(address _scene)
        public
        view
        returns (address[])
    {
        return users[_scene];
    }
}
