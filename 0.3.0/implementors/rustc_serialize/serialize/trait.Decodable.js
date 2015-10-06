(function() {var implementors = {};
implementors['url'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='url/struct.Url.html' title='url::Url'>Url</a>",];implementors['cbor'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='cbor/enum.CborUnsigned.html' title='cbor::CborUnsigned'>CborUnsigned</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='cbor/enum.CborSigned.html' title='cbor::CborSigned'>CborSigned</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='cbor/enum.CborFloat.html' title='cbor::CborFloat'>CborFloat</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='cbor/struct.CborBytes.html' title='cbor::CborBytes'>CborBytes</a>",];implementors['num'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='num/bigint/enum.Sign.html' title='num::bigint::Sign'>Sign</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='num/complex/struct.Complex.html' title='num::complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;T: <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a>&gt; <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors['maidsafe_sodiumoxide'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PublicKey.html' title='maidsafe_sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.SecretKey.html' title='maidsafe_sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.Nonce.html' title='maidsafe_sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/box_/curve25519xsalsa20poly1305/struct.PrecomputedKey.html' title='maidsafe_sodiumoxide::crypto::box_::curve25519xsalsa20poly1305::PrecomputedKey'>PrecomputedKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/sign/ed25519/struct.Seed.html' title='maidsafe_sodiumoxide::crypto::sign::ed25519::Seed'>Seed</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/sign/ed25519/struct.SecretKey.html' title='maidsafe_sodiumoxide::crypto::sign::ed25519::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/sign/ed25519/struct.PublicKey.html' title='maidsafe_sodiumoxide::crypto::sign::ed25519::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/sign/ed25519/struct.Signature.html' title='maidsafe_sodiumoxide::crypto::sign::ed25519::Signature'>Signature</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/sign/edwards25519sha512batch/struct.SecretKey.html' title='maidsafe_sodiumoxide::crypto::sign::edwards25519sha512batch::SecretKey'>SecretKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/sign/edwards25519sha512batch/struct.PublicKey.html' title='maidsafe_sodiumoxide::crypto::sign::edwards25519sha512batch::PublicKey'>PublicKey</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/scalarmult/curve25519/struct.Scalar.html' title='maidsafe_sodiumoxide::crypto::scalarmult::curve25519::Scalar'>Scalar</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/scalarmult/curve25519/struct.GroupElement.html' title='maidsafe_sodiumoxide::crypto::scalarmult::curve25519::GroupElement'>GroupElement</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/auth/hmacsha512/struct.Key.html' title='maidsafe_sodiumoxide::crypto::auth::hmacsha512::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/auth/hmacsha512/struct.Tag.html' title='maidsafe_sodiumoxide::crypto::auth::hmacsha512::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/auth/hmacsha512256/struct.Key.html' title='maidsafe_sodiumoxide::crypto::auth::hmacsha512256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/auth/hmacsha512256/struct.Tag.html' title='maidsafe_sodiumoxide::crypto::auth::hmacsha512256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/auth/hmacsha256/struct.Key.html' title='maidsafe_sodiumoxide::crypto::auth::hmacsha256::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/auth/hmacsha256/struct.Tag.html' title='maidsafe_sodiumoxide::crypto::auth::hmacsha256::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/hash/sha512/struct.Digest.html' title='maidsafe_sodiumoxide::crypto::hash::sha512::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/hash/sha256/struct.Digest.html' title='maidsafe_sodiumoxide::crypto::hash::sha256::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Key.html' title='maidsafe_sodiumoxide::crypto::secretbox::xsalsa20poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/secretbox/xsalsa20poly1305/struct.Nonce.html' title='maidsafe_sodiumoxide::crypto::secretbox::xsalsa20poly1305::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/onetimeauth/poly1305/struct.Key.html' title='maidsafe_sodiumoxide::crypto::onetimeauth::poly1305::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/onetimeauth/poly1305/struct.Tag.html' title='maidsafe_sodiumoxide::crypto::onetimeauth::poly1305::Tag'>Tag</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.Salt.html' title='maidsafe_sodiumoxide::crypto::pwhash::scryptsalsa208sha256::Salt'>Salt</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/pwhash/scryptsalsa208sha256/struct.HashedPassword.html' title='maidsafe_sodiumoxide::crypto::pwhash::scryptsalsa208sha256::HashedPassword'>HashedPassword</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/xsalsa20/struct.Key.html' title='maidsafe_sodiumoxide::crypto::stream::xsalsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/xsalsa20/struct.Nonce.html' title='maidsafe_sodiumoxide::crypto::stream::xsalsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/aes128ctr/struct.Key.html' title='maidsafe_sodiumoxide::crypto::stream::aes128ctr::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/aes128ctr/struct.Nonce.html' title='maidsafe_sodiumoxide::crypto::stream::aes128ctr::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/salsa208/struct.Key.html' title='maidsafe_sodiumoxide::crypto::stream::salsa208::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/salsa208/struct.Nonce.html' title='maidsafe_sodiumoxide::crypto::stream::salsa208::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/salsa2012/struct.Key.html' title='maidsafe_sodiumoxide::crypto::stream::salsa2012::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/salsa2012/struct.Nonce.html' title='maidsafe_sodiumoxide::crypto::stream::salsa2012::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/salsa20/struct.Key.html' title='maidsafe_sodiumoxide::crypto::stream::salsa20::Key'>Key</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/stream/salsa20/struct.Nonce.html' title='maidsafe_sodiumoxide::crypto::stream::salsa20::Nonce'>Nonce</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/shorthash/siphash24/struct.Digest.html' title='maidsafe_sodiumoxide::crypto::shorthash::siphash24::Digest'>Digest</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='maidsafe_sodiumoxide/crypto/shorthash/siphash24/struct.Key.html' title='maidsafe_sodiumoxide::crypto::shorthash::siphash24::Key'>Key</a>",];implementors['crust'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='crust/enum.Endpoint.html' title='crust::Endpoint'>Endpoint</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='crust/enum.Port.html' title='crust::Port'>Port</a>",];implementors['routing'] = ["impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.SignedToken.html' title='routing::SignedToken'>SignedToken</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/struct.NameType.html' title='routing::NameType'>NameType</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/types/enum.Address.html' title='routing::types::Address'>Address</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/types/enum.SourceAddress.html' title='routing::types::SourceAddress'>SourceAddress</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/types/enum.DestinationAddress.html' title='routing::types::DestinationAddress'>DestinationAddress</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/public_id/struct.PublicId.html' title='routing::public_id::PublicId'>PublicId</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/error/enum.ResponseError.html' title='routing::error::ResponseError'>ResponseError</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/authority/enum.Authority.html' title='routing::authority::Authority'>Authority</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/structured_data/struct.StructuredData.html' title='routing::structured_data::StructuredData'>StructuredData</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/immutable_data/enum.ImmutableDataType.html' title='routing::immutable_data::ImmutableDataType'>ImmutableDataType</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/immutable_data/struct.ImmutableData.html' title='routing::immutable_data::ImmutableData'>ImmutableData</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='struct' href='routing/plain_data/struct.PlainData.html' title='routing::plain_data::PlainData'>PlainData</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/data/enum.Data.html' title='routing::data::Data'>Data</a>","impl <a class='trait' href='rustc_serialize/serialize/trait.Decodable.html' title='rustc_serialize::serialize::Decodable'>Decodable</a> for <a class='enum' href='routing/data/enum.DataRequest.html' title='routing::data::DataRequest'>DataRequest</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
